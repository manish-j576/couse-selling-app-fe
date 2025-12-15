import { createContext , useState , useContext, useEffect } from "react";


const AuthContext = createContext(null);

export function AuthProvider ({children}){
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(() => {
      const savedLogin = localStorage.getItem("isLoggedIn");
      if (savedLogin === "true") {
        setIsLoggedIn(true);
      }
    }, []);

    return (
        <AuthContext.Provider value={{isLoggedIn , setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);