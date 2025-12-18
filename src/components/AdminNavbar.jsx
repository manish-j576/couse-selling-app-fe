import { useState } from "react";
import { useAuth } from "../Provider/AuthContext";
import { LogoutButton } from "./LogoutButton";
import { Logo } from "./Logo";
import { AdminLoginSignupContainer } from "./AdminLoginSignupContainer";
import { useAdminAuth } from "../Provider/AdminAuthContext";
export function AdminNavbar(){
  const [loading, setLoading] = useState(false);
    const AdminAuthContext = useAdminAuth()

  function HandleLogoutAdmin(){
    setLoading(true)
    localStorage.removeItem("token");
    localStorage.removeItem("isAdminLoggedIn");
    window.location.reload();
  }
    return (
      <nav className=" bg-[#F5F5F5] w-full z-20 sticky top-0 start-0 border-b border-default h-16">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Logo></Logo>
          <div>
            {AdminAuthContext.isAdminLoggedIn ? (
              <LogoutButton
                loading={loading}
                HandleLogout={HandleLogoutAdmin}
              ></LogoutButton>
            ) : (
              <AdminLoginSignupContainer></AdminLoginSignupContainer>
            )}
          </div>
        </div>
      </nav>
    );

}