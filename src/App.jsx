import { HeroSection } from "./components/HeroSection"
import { LeftSection } from "./components/Leftsection";
import { MainSection } from "./components/MainSection";
import { Navbar } from "./components/Navbar"
import { LoginModalProvider } from "./Provider/LoginModalContext";
import { SignupModalProvider } from "./Provider/SignupModalContext";


function App() {
  return (
    <div className="flex flex-col bg-linear-to-r from-black via-gray-900 to-gray-800">
      <LoginModalProvider>
        <SignupModalProvider>
              <Navbar></Navbar>
          </SignupModalProvider>
        </LoginModalProvider>
      <MainSection></MainSection>
    </div>
  );
}

export default App
