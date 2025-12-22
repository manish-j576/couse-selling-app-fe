import { useNavigate } from "react-router-dom";

export function GoBack(){
    const navigate = useNavigate()
    return (
      <div className="bg-slate-100 p-3 w-fit ml-4  mt-2 border rounded-4xl hover:bg-slate-200">
        <button 
        onClick={()=>{
            navigate("/admin")
        }}
        >Go back</button>
      </div>
    );
}