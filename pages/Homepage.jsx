import { MainSection } from "../src/components/MainSection";
import { Navbar } from "../src/components/Navbar";

export function Hompage(){
    return (
      <div className="flex flex-col bg-linear-to-r from-black via-gray-900 to-gray-800">
        <Navbar></Navbar>
        <MainSection></MainSection>
      </div>
    );
}