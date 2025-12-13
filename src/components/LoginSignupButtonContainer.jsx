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
      <span className="flex justify-around">
        <LoginButton></LoginButton>
        <SignupButton></SignupButton>
        {LoginModalContext.showLoginModal && <LoginModal></LoginModal>}
        {SignupModalContext.showSignupModal && <SignupModal></SignupModal>}
      </span>
    );
}