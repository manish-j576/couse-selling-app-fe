import { useAdminSignup } from "../Provider/AdminSignupModalContext";
import { useSignupModal } from "../Provider/SignupModalContext";

export function AdminSignupButton (){
  const AdminSignupModalContext = useAdminSignup()
    return (
      <button className=" p-2 bg-blue-700 w-30 border-2- rounded-xl text-md ml-3 text-white hover:cursor-pointer hover:bg-blue-800" onClick={()=>{AdminSignupModalContext.setShowAdminSignupModal(true);}}>
        Signup
      </button>
      
    );
}