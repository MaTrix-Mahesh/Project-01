const mongoose = require("mongoose");


const connectdb = async ()=>{
    try{
       const connect = await  mongoose.connect (`${process.env.mongodb_url}`)
       console.log("connected with database ");
       
    }catch(err){
        console.log(err.message);
        process.exit(1);
        
    }   
}

module.exports = connectdb