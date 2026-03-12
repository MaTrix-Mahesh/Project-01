const User = require("../models/user");
const bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")
module.exports.register = async function(req,res){

    const {name , email,password} = req.body;

    try{
        if (!name || !email || !password) {
            return res.status(200).json({
                message:"all field are required"
            })
        }

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message : 'user already exist '
            })
        }

        let salt = await bcrypt.genSalt()
        let  hashpassword = await bcrypt.hash(password,salt)

        user = await User.create({
            name,
            email,
            password : hashpassword
        });

      const token = await  jwt.sign({id : user.__id},process.env.JWT_SECRET ,{
            explireIN :'2d',
        });

        
    }catch(err){
        console.log(err);
    }
}