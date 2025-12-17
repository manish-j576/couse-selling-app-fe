import { useAuth } from "../Provider/AuthContext"
import { useHeroSection } from "../Provider/HeroSectionContext"
import { Greetings } from "./Greetings"
import { MyCoursesComponent } from "./MyCoursesComponent"
import { HomeComponent } from "./HomeComponent"
export function HeroSection(){
  const HeroSectionContext = useHeroSection()
  console.log(HeroSectionContext)
    const authContext = useAuth()
    return (
      <div className="w-full h-[calc(100vh-4rem)]  text-white z-10 bg-pink-900 overflow-y-scroll">
        {HeroSectionContext.isHomeComponentMounted ? (
          <HomeComponent></HomeComponent> ): <></>
        }
      </div>
    );
}