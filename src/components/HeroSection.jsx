import { useAuth } from "../Provider/AuthContext"
import { useHeroSection } from "../Provider/HeroSectionContext"
import { HomeComponent } from "./HomeComponent"
export function HeroSection(){
  const HeroSectionContext = useHeroSection()
  console.log(HeroSectionContext)
    const authContext = useAuth()
    function getGreeting() {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    }
    const greetings = getGreeting()
    return (
      <div className="w-full h-[calc(100vh-4rem)]  text-white z-10 bg-pink-900">
        <div className="w-full p-2 bg-amber-950 flex items-center">
          <h2 className="text-3xl">
        {greetings} !
          </h2>
        </div>
        {HeroSectionContext.isHomeComponentMounted && (
          <HomeComponent></HomeComponent>
        )}
      </div>
    );
}