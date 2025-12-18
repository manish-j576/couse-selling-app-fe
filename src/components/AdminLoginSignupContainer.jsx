import { useAdminLogin } from "../Provider/AdminLoginModalContext";
import { useAdminSignup } from "../Provider/AdminSignupModalContext";
import { AdminLoginButton } from "./AdminLoginButton";
import { AdminLoginModal } from "./AdminLoginModal";
import { AdminSignupButton } from "./AdminSignupButton";
import { AdminSignupModal } from "./AdminSignupModal";

export function AdminLoginSignupContainer() {

  const AdminLoginModalContext = useAdminLogin();
  const AdminSignupModalContext = useAdminSignup()
  return (
    <div className="flex justify-around items-center w-">
      <AdminLoginButton></AdminLoginButton>
      <AdminSignupButton></AdminSignupButton>
      {AdminLoginModalContext.showAdminLoginModal && (
        <AdminLoginModal></AdminLoginModal>
      )}
      {AdminSignupModalContext.showAdminSignupModal && (
        <AdminSignupModal></AdminSignupModal>
      )}
    </div>
  );
}
