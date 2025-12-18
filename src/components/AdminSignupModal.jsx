import {  useRef, useState } from "react";
import { useAdminAuth } from "../Provider/AdminAuthContext";
import { useAdminSignup } from "../Provider/AdminSignupModalContext";
import { SendAdminLoginRequest, SendAdminSignupRequest } from "../api/adminAuth";

export function AdminSignupModal(){
      const AdminSignupModalContext = useAdminSignup()
      const adminAuthContext = useAdminAuth()
      const email = useRef("")
      const name = useRef("")
      const username = useRef("")
      const password = useRef("")
      const [loading, setLoading] = useState(false);


     async function HandleSignup(){
        setLoading(true)
        try{
          const adminSignUpResponse = await SendAdminSignupRequest(name.current.value , username.current.value , email.current.value , password.current.value)
          console.log(adminSignUpResponse);
          if (adminSignUpResponse.status == 200) {
            const responseLogin = await SendAdminLoginRequest(
              email.current.value,
              password.current.value
            );
            if (responseLogin.status == 200) {
              const token = responseLogin.data.token;
              localStorage.setItem("token", token);
              localStorage.setItem("isAdminLoggedIn", "true");
              adminAuthContext.setIsAdminLoggedIn(true);
              setLoading(false);
              AdminSignupModalContext.setShowAdminSignupModal(false);
            }
          }
        }catch(error){
          alert(error.response.data.message)
          setLoading(false);

        }
      }
    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white w-80 p-6 rounded shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Signup</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full border px-3 py-2 mb-3 rounded"
            ref={name}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full border px-3 py-2 mb-3 rounded"
            ref={username}
          />
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
            onClick={HandleSignup}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {loading ? "Loading ..." : "Signup"}
          </button>

          {/* Close button */}
          <button
            onClick={() =>
              AdminSignupModalContext.setShowAdminSignupModal(false)
            }
            className="mt-4 w-full text-red-600 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    );
};