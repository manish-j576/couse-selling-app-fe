export function LogoutButton({ HandleLogout , loading }) {
  return <span className="flex justify-around">
    <button
      onClick={() => HandleLogout()}
      className=" p-2 bg-white w-25 border-2- rounded-xl text-md ml-3 text-black hover:cursor-pointer hover:bg-slate-200"
    >
      {loading ? "Loading.." : "Logout"}
    </button>
  </span>;
}