import { captureOwnerStack, useRef, useState } from "react";
import { useSignupModal } from "../Provider/SignupModalContext";
import { SendLoginRequest, SendSignupRequest } from "../api/auth";
import axios from "axios";
import { useAuth } from "../Provider/AuthContext";

export function SignupModal(){
      const SignupModalContext = useSignupModal()
      const authContext = useAuth()
      const email = useRef("")
      const name = useRef("")
      const username = useRef("")
      const password = useRef("")
      const [loading, setLoading] = useState(false);


     async function HandleSignup(){
        setLoading(true)
        try{
          const userSignUpResponse = await SendSignupRequest(name.current.value , username.current.value , email.current.value , password.current.value)
          console.log(userSignUpResponse)
          if(userSignUpResponse.status == 200 ){
            const responseLogin = await SendLoginRequest(email.current.value,password.current.value)
            if(responseLogin.status == 200){

              const token = responseLogin.data.token
              localStorage.setItem("token", token);
              authContext.setIsLoggedIn(true);
              setLoading(false)
              SignupModalContext.setShowSignupModal(false);
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
            onClick={() => SignupModalContext.setShowSignupModal(false)}
            className="mt-4 w-full text-red-600 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    );
};