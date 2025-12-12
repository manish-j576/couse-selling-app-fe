import { useRef, useState } from "react";
import { SendLoginRequest } from "../api/auth";
import { useAuth } from "../Provider/AuthContext";
function LoginModal({ setShowModal }) {
  const authContext = useAuth()
  const email = useRef("")
  const password = useRef("")
  const [loading, setLoading] = useState(false);
 async function HandleLogin(){
    setLoading(true)
      const userLoginResponse = await SendLoginRequest(email.current.value,password.current.value)
      console.log(userLoginResponse)
      if(userLoginResponse.status == 200){
        console.log(userLoginResponse.data.token)
        localStorage.setItem("token", userLoginResponse.data.token);
        authContext.setIsLoggedIn(true);
        setLoading(false);
        setShowModal(false);
      }else{
        alert(userLoginResponse.data.message)
      }

  }
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white w-80 p-6 rounded shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
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

                      <button onClick={HandleLogin} className="w-full bg-blue-600 text-white py-2 rounded">
                      {loading ? "Loading ..." : "Login"}
                      </button>
                      
                      {/* Close button */}
                      <button
                      onClick={() => setShowModal(false)}
                      className="mt-4 w-full text-red-600 font-semibold"
                    >
                    Close
                    </button>
                    </div>
                    </div>)
                };

export default LoginModal;
