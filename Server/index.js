let express = require("express");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
let connect_database = require("./config/db");
const connectdb = require("./config/db");
const app = express();
dotenv.config();
connectdb()


app.get("/",function(req,res) {
    res.send("welcome");
})

app.listen(5000,()=>{
    console.log('server started on port 5000');
    
})