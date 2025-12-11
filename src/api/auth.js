import axios from "axios";
export async function SendLoginRequest(username , password){
    const userLoginResponse =await axios.post("http://localhost:3000/api/user/login",{
        email : username,
        password:password
    })
    return userLoginResponse
}