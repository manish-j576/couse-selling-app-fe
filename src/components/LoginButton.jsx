import { useLoginModal } from "../Provider/LoginModalContext";

export function LoginButton() {
    const LoginModalContext = useLoginModal();
  return (
    <button
      onClick={() => LoginModalContext.setShowLoginModal(true)}
      className=" p-2 bg-white w-25 border-2- rounded-xl text-md ml-3 text-black hover:cursor-pointer hover:bg-slate-200"
    >
      Login
    </button>
  );
}
