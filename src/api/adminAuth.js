import axios from "axios";

export async function SendAdminLoginRequest(email , password) {
    const adminLoginResponse = await axios.post(
      "http://localhost:3000/api/admin/login",
      {
        email: email,
        password: password,
      }
    );
    return adminLoginResponse;
    
}

export async function SendAdminSignupRequest(name , username , email , password) {
    const adminSignupResponse = await axios.post(
      "http://localhost:3000/api/admin/signup",
      {
        name: name,
        username: username,
        email: email,
        password: password,
      }
    );
    return adminSignupResponse;
}