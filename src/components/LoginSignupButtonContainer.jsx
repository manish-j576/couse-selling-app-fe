import { LoginButton } from "./LoginButton";
import LoginModal from "./LoginModal";
import { SignupButton } from "./SignupButton";
import {useLoginModal} from "../Provider/LoginModalContext"
export function LoginSignupButtonContainer (){
    const LoginModalContext = useLoginModal()
    return (
      <span className="flex justify-around">
        <LoginButton></LoginButton>
        <SignupButton></SignupButton>
        {LoginModalContext.showLoginModal && <LoginModal></LoginModal>}
      </span>
    );
}