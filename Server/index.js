let express = require("express");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
let connect_database = require("./config/db");
const connectdb = require("./config/db");
const authRoutes = require("./routes/auth.routes")
const cookieParser = require("cookie-parser") 
const app = express();
dotenv.config();
connectdb()


app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/auth",authRoutes)

app.get("/",function(req,res) {
    res.send("welcome");
})

app.listen(5000,()=>{
    console.log('server started on port 5000');
    
})