import { HeroSection } from "./HeroSection";
import { LeftSection } from "./Leftsection";
import { useAuth } from "../Provider/AuthContext";
import { useLeftSectionContext } from "../Provider/LeftSectionContext";
export function MainSection(){
  const LeftSectionContext = useLeftSectionContext()
  console.log(LeftSectionContext)
  const AuthContext = useAuth()
    return (
      <div className="flex w-full max-h-[calc(100vh-4rem)] bg-green-600">
        {AuthContext.isLoggedIn && (
          <div
            className={`${
              LeftSectionContext.isLeftSectionfull ? "w-1/6" : "w-12"
            } shrink-0 transition-[width] duration-300 ease-in-out`}
          >
            <LeftSection></LeftSection>
          </div>
        )}
        <div className="flex-1">
          <HeroSection></HeroSection>
        </div>
      </div>
    );
}