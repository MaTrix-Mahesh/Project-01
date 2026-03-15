import { useState } from "react";
import API from "../api/axios";
import "./auth.css";

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

try{

const res = await API.post("/auth/login",{
email,
password
})

alert(res.data.message)

}catch(err){
alert(err.response?.data?.message)
}

}

return(

<div className="container">

<div className="card">

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Login</button>

</form>

</div>

</div>

)

}

export default Login
