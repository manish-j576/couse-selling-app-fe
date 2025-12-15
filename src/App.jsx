
import { MainSection } from "./components/MainSection";
import { Navbar } from "./components/Navbar"
import { LoginModalProvider } from "./Provider/LoginModalContext";
import { SignupModalProvider } from "./Provider/SignupModalContext";
import { LeftSectionContextProvider } from "./Provider/LeftSectionContext";

function App() {
  return (
    <div className="flex flex-col bg-linear-to-r from-black via-gray-900 to-gray-800">
      <LoginModalProvider>
        <SignupModalProvider>
          <Navbar></Navbar>
        </SignupModalProvider>
      </LoginModalProvider>
      <LeftSectionContextProvider>

        <MainSection></MainSection>
      </LeftSectionContextProvider>
    </div>
  );
}

export default App
