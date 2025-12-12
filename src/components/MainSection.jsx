import { HeroSection } from "./HeroSection";
import { LeftSection } from "./Leftsection";

export function MainSection(){
    return (
      <div className="flex w-full max-h-[calc(100vh-4rem)]">
        <LeftSection></LeftSection>
        <HeroSection></HeroSection>
      </div>
    );
}