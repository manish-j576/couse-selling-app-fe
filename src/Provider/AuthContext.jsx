import { createContext , useState , useContext, useEffect } from "react";


const AuthContext = createContext(null);

export function AuthProvider ({children}){
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
      const savedLogin = localStorage.getItem("isUserLoggedIn");
      if (savedLogin === "true") {
        setIsUserLoggedIn(true);
      }
    }, []);

    return (
        <AuthContext.Provider value={{isUserLoggedIn , setIsUserLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);