import { LoginButton } from "./LoginButton";
import LoginModal from "./LoginModal";
import { SignupButton } from "./SignupButton";
import {useLoginModal} from "../Provider/LoginModalContext"
import { useSignupModal } from "../Provider/SignupModalContext";
import { SignupModal } from "./SignupModal";

export function LoginSignupButtonContainer (){
    const LoginModalContext = useLoginModal()
    const SignupModalContext = useSignupModal()
    return (
      <div className="flex justify-around items-center">
        <LoginButton></LoginButton>
        <SignupButton></SignupButton>
        {LoginModalContext.showLoginModal && <LoginModal></LoginModal>}
        {SignupModalContext.showSignupModal && <SignupModal></SignupModal>}
      </div>
    );
}