const User = require("../models/user");

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
    }catch(err){
        console.log(err);
    }
}