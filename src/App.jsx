import { HeroSection } from "./components/HeroSection"
import { Navbar } from "./components/Navbar"


function App() {
  return (
    <div className="flex flex-col bg-linear-to-r from-black via-gray-900 to-gray-800">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </div>
  );
}

export default App
