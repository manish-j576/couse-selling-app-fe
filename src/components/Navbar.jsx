import { useState } from "react";
import LoginModal from "./LoginModal";
import { useAuth } from "../Provider/AuthContext";
export function Navbar(){
  const [showModal,setShowModal ]=useState(false)
  const [loading, setLoading] = useState(false);
  const authContext = useAuth();

  function HandleLogout(){
    setLoading(true)
    localStorage.removeItem("token");
    window.location.reload();
  }
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
            {authContext.isLoggedIn ? (
              <span className="flex justify-around">
                <button
                  onClick={() => HandleLogout()}
                  className=" p-2 bg-white w-25 border-2- rounded-xl text-md ml-3 text-black hover:cursor-pointer hover:bg-slate-200"
                >
                  {loading ? "Loading.." : "Logout"}
                </button>
              </span>):(
              <span className="flex justify-around">
                <button
                  onClick={() => setShowModal(true)}
                  className=" p-2 bg-white w-25 border-2- rounded-xl text-md ml-3 text-black hover:cursor-pointer hover:bg-slate-200"
                >
                  Login
                </button>

                <button className=" p-2 bg-blue-700 w-25 border-2- rounded-xl text-md ml-3 text-white hover:cursor-pointer hover:bg-blue-800">
                  Signup
                </button>
                {showModal && (
                  <LoginModal
                    setShowModal={setShowModal}
                  ></LoginModal>
                )}
              </span>
            )}
          </div>
        </div>
      </nav>
    );

}