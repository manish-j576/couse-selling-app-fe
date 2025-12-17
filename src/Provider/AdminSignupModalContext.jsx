import { createContext , useContext , useState } from "react";

const AdminSignupContext = createContext()


export function AdminSignupContextProvider ({children}){
    const [showAdminSignupModal, setShowAdminSignupModal] = useState(false);
    return (
      <AdminSignupContext.Provider
        value={{ showAdminSignupModal, setShowAdminSignupModal }}
      >
        {children}
      </AdminSignupContext.Provider>
    );
}

export const useAdminSignup = () => useContext(AdminSignupContext)