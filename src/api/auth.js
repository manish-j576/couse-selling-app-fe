import axios from "axios";
export async function SendLoginRequest(email , password){
    const userLoginResponse =await axios.post("http://localhost:3000/api/user/login",{
        email : email,
        password:password
    })
    return userLoginResponse
}

export async function SendSignupRequest(name , username , email , password) {
    const userSignupResponse = await axios.post("http://localhost:3000/api/user/signup",{
        name : name,
        username : username,
        email : email,
        password : password

    })
    return userSignupResponse
}