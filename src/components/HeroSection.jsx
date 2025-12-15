import { useAuth } from "../Provider/AuthContext"

export function HeroSection(){
    const authContext = useAuth()
    return (
      <div className="w-full h-[calc(100vh-4rem)] text-6xl text-white z-10 bg-pink-900">
        this is hero section
        {authContext.isLoggedIn ? (
          <h1>User is logged in</h1>
        ) : (
          <h2>User is logged out</h2>
        )}
      </div>
    );
}