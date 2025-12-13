import { createContext ,useContext,useState } from "react";

const SignupModalContext = createContext()


export function SignupModalProvider ({children}){
    const [showSignupModal , setShowSignupModal] = useState(false)
    return <SignupModalContext.Provider value = {{showSignupModal , setShowSignupModal}}>
        {children}
    </SignupModalContext.Provider>
}

export const useSignupModal = () => useContext(SignupModalContext)
