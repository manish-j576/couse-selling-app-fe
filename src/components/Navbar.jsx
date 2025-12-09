import { useRef, useState } from "react";
import { HandleLogin } from "../api/auth";

export function Navbar(){
  const [showLogin , setShowLogin] = useState(false)
  const username = useRef("");
  const password = useRef("");
    return (
      <nav class="bg-neutral-primary w-full z-20 top-0 start-0 border-b border-default ">
        <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <div className=" relative left-5 text-2xl">
            <a
              href="http://localhost:5173"
              class="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
            >
              <span class="self-center text-heading font-semibold whitespace-nowrap text-blue-600">
                Learning Hours
              </span>
            </a>
          </div>
          <div>
            <span className="flex justify-around">
              <button onClick={()=>setShowLogin(true)}
className=" p-2 bg-white w-25 border-2- rounded-xl text-md ml-3 text-black hover:cursor-pointer hover:bg-slate-200">
                Login
              </button>

              <button className=" p-2 bg-blue-700 w-25 border-2- rounded-xl text-md ml-3 text-white hover:cursor-pointer hover:bg-blue-800">
                Signup
              </button>
              {showLogin && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                  <div className="bg-white w-80 p-6 rounded shadow-xl">
                    <h2 className="text-xl font-semibold mb-4">Login</h2>

                    <input
                      type="text"
                      placeholder="Email"
                      className="w-full border px-3 py-2 mb-3 rounded"
                      ref={username}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full border px-3 py-2 mb-3 rounded"
                      ref={password}
                    />

                    <button onClick={()=>{HandleLogin(username.current.value,password.current.value)}} className="w-full bg-blue-600 text-white py-2 rounded">
                      Login
                    </button>

                    {/* Close button */}
                    <button
                      onClick={() => setShowLogin(false)}
                      className="mt-4 w-full text-red-600 font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </span>
          </div>
        </div>
      </nav>
    );

}