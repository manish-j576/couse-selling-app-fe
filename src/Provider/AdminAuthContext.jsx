import { createContext , useState , useContext, useEffect } from "react";


const AdminAuthContext = createContext(null);

export function AdminAuthContextProvider ({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const savedLogin = localStorage.getItem("isAdminLoggedIn");
    if (savedLogin === "true") {
      setIsAdminLoggedIn(true);
    }
  }, []);

  return (
    <AdminAuthContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export const useAdminAuth = () => useContext(AdminAuthContext);