import { useAuth } from "../Provider/AuthContext"


export function HeroSection(){
    const authContext = useAuth()
    return <div className="w-full h-screen bg-gradient-40 text-6xl text-white">
        this is hero section
        {authContext.isLoggedIn ? <h1>User is logged in</h1> : <h2>User is logged out</h2>}

    </div>
}