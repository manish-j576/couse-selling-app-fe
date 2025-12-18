import { useAdminLogin } from "../Provider/AdminLoginModalContext";

export function AdminLoginButton() {
  const AdminLoginModalContext = useAdminLogin();
  return (
    <button
      onClick={() => AdminLoginModalContext.setAdminLoginModal(true)}
      className=" p-2 bg-white w-25 border-2- rounded-xl text-md ml-3 text-black hover:cursor-pointer hover:bg-slate-200"
    >
       Login
    </button>
  );
}
