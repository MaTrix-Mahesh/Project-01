import { useState } from "react";
import API from "../api/axios";

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
alert(err.response.data.message)
}

}

return(

<div>

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Login</button>

</form>

</div>

)
}

export default Login