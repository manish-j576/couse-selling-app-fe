import { useAuth } from "../Provider/AuthContext"


export function HeroSection(){
    const authContext = useAuth()
    return (
      <div className="w-5/6  bg-linear-to-r from-black via-[#030712] to-[#1e293b] text-6xl text-white z-10 ">
        this is hero section
        {authContext.isLoggedIn ? (
          <h1>User is logged in</h1>
        ) : (
          <h2>User is logged out</h2>
        )}
      </div>
    );
}