import { useRef, useState } from "react";
import { useAdminAuth } from "../Provider/AdminAuthContext";
import { useAdminLogin } from "../Provider/AdminLoginModalContext";
import { SendAdminLoginRequest } from "../api/adminAuth";
import { Link, useNavigate } from "react-router-dom";

export function AdminLoginModal(){
  const AdminAuthContext = useAdminAuth()
  const AdminLoginModalContext = useAdminLogin()
  const navigate = useNavigate()
  const email = useRef("")
  const password = useRef("")
  const [loading, setLoading] = useState(false);
  async function handleAdminLogin(){
     try{
        setLoading(true)
          const adminLoginResponse = await SendAdminLoginRequest(email.current.value,password.current.value)
          console.log(adminLoginResponse)
          if (adminLoginResponse.status == 200) {
            localStorage.setItem("token", adminLoginResponse.data.token);
            localStorage.setItem("isAdminLoggedIn", "true");
            AdminAuthContext.setIsAdminLoggedIn(true);
            setLoading(false);
            AdminLoginModalContext.setAdminLoginModal(false);
          }
        }catch(error){
            alert(error.response.data.message)
              setLoading(false);
    
        }


  }
    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white w-80 p-6 rounded shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Login As Admin</h2>
          <input
            type="text"
            placeholder="Email"
            className="w-full border px-3 py-2 mb-3 rounded"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 mb-3 rounded"
            ref={password}
          />

          <button
            onClick={handleAdminLogin}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {loading ? "Loading ..." : "Login As Admin"}
          </button>

          {/* Close button */}
          <button
            onClick={() => {
              AdminLoginModalContext.setAdminLoginModal(false);
            }}
            className="mt-2 w-full text-red-600 font-semibold border px-3 py-2 rounded"
          >
            Close
          </button>
          <div className="w-full flex justify-center items-center py-6">
            <div className="w-full border h-0"></div>
            <div className="w-fit px-2">OR</div>
            <div className="w-full border h-0"></div>
          </div>
          <Link to="/" reloadDocument>
          <div className="w-full border px-3 py-2  rounded flex justify-center hover:bg-[#2dba82] hover:cursor-pointer">
            <button> Login as User</button>
          </div>
          </Link>
        </div>
      </div>
    );
}