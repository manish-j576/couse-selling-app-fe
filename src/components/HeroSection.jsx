import { useAuth } from "../Provider/AuthContext"
import { useHeroSection } from "../Provider/HeroSectionContext"
import { MyCoursesComponent } from "./MyCoursesComponent"
import { HomeComponent } from "./HomeComponent"
import { AllCoursesComponent } from "./AllCourses"
export function HeroSection(){
  const HeroSectionContext = useHeroSection()
  console.log(HeroSectionContext)
    const authContext = useAuth()
    return (
      <div className="w-full h-[calc(100vh-4rem)]  text-white z-10 bg-[#F5F7FB] overflow-y-scroll">
        {HeroSectionContext.isHomeComponentMounted ? (
          <HomeComponent></HomeComponent>
        ) : (
          <></>
        )}
        { HeroSectionContext.isMyCourseComponentMounted? 
          <MyCoursesComponent></MyCoursesComponent> : <></>
        }
        {HeroSectionContext.isCoursesComponentMounted ? <AllCoursesComponent>
        </AllCoursesComponent> : <></>}
      </div>
    );
}