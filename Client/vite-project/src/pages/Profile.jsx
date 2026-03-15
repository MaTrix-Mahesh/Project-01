import { useEffect, useState } from "react";
import API from "../api/axios";

function Profile(){

const [user,setUser] = useState(null)

useEffect(()=>{

API.post("/auth/me")
.then(res=>{
setUser(res.data.User)
})
.catch(err=>{
console.log(err)
})

},[])

return(

<div>

<h2>Profile</h2>

{user && (
<div>

<p>Name : {user.name}</p>
<p>Email : {user.email}</p>

</div>
)}

</div>

)
}

export default Profile