import { useNavigate } from "react-router-dom";

export function PreviewCourse(){
  const navigate = useNavigate()

  function handleOnclick(){
    navigate("/preview")
  }
    return (
      <button onClick={handleOnclick}
      className="rounded-lg bg-orange-200 px-8 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50">
        Preview Courses
      </button>
    );
}