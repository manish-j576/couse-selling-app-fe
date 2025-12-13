import { useSignupModal } from "../Provider/SignupModalContext";

export function SignupButton (){
  const SignUpModalContext = useSignupModal()
    return (
      <button className=" p-2 bg-blue-700 w-25 border-2- rounded-xl text-md ml-3 text-white hover:cursor-pointer hover:bg-blue-800" onClick={()=>{SignUpModalContext.setShowSignupModal(true)}}>
        Signup
      </button>
      
    );
}