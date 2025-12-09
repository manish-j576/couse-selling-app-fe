import axios from "axios";
export async function HandleLogin(username , password){
    const response =await axios.post("http://localhost:3000/api/user/login",{
        email : username,
        password:password
    })
    console.log(response);
    return null
}