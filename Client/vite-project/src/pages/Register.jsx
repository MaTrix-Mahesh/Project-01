import { useState } from "react";
import API from "../api/axios";

function Register() {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

try{
const res = await API.post("/auth/register",{
name,
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

<h2>Register</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

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

<button type="submit">Register</button>

</form>

</div>
)
}

export default Register