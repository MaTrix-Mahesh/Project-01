import API from "../api/axios";

function Navbar(){

const logout = async()=>{

await API.post("/auth/logout")

alert("logout success")

}

return(

<div>

<button onClick={logout}>Logout</button>

</div>

)

}

export default Navbar