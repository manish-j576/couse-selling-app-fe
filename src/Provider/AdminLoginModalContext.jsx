import { createContext , useContext , useState } from "react";

const AdminLoginContext = createContext()


export function AdminLoginContextProvider ({children}){
    const [showAdminLoginModal , setAdminLoginModal] = useState(false)
    return <AdminLoginContext.Provider value={{showAdminLoginModal,setAdminLoginModal}}>
        {children}
    </AdminLoginContext.Provider>
}

export const useAdminLogin = () => useContext(AdminLoginContext)