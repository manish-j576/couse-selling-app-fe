import { HeroSection } from "./HeroSection";
import { LeftSection } from "./Leftsection";
import { useAuth } from "../Provider/AuthContext";
export function MainSection(){
  const AuthContext = useAuth()
    return (
      <div className="flex w-full max-h-[calc(100vh-4rem)]">
        {AuthContext.isLoggedIn && (
          <div className="w-1/6 shrink-0">
            <LeftSection></LeftSection>
          </div>
        )}
        <div className="flex-1 ">
          <HeroSection></HeroSection>
        </div>
      </div>
    );
}