import { useState } from "react";
import { useAuth } from "../Provider/AuthContext";
import { LogoutButton } from "./LogoutButton";
import { LoginSignupButtonContainer } from "./LoginSignupButtonContainer";
import { Logo } from "./Logo";
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
      <nav class=" bg-linear-to-r from-black via-[#030712] to-[#1e293b] w-full z-20 sticky top-0 start-0 border-b border-default h-16">
        <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Logo></Logo>
          <div>
            {authContext.isLoggedIn ? (<LogoutButton loading={loading}  HandleLogout={HandleLogout}></LogoutButton>) : (<LoginSignupButtonContainer></LoginSignupButtonContainer>)}
          </div>
        </div>
      </nav>
    );

}