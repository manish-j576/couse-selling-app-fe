import { useAdminButton } from "../Provider/AdminButtonContext";

export function CreateCourse(){
    const AdminButtonContext = useAdminButton()

    async function  HandleCreateCourse() {
        console.log("CreateButtonClicked")
        AdminButtonContext.setCreateCourseModal(true)
        AdminButtonContext.setUpdateCourseModal(false)
        AdminButtonContext.setDeleteCourseModal(false)
        AdminButtonContext.setPreviewCourse(false)
    }
    return (
      <button className="rounded-lg bg-green-200 px-8 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50" onClick={()=>{
        HandleCreateCourse()
      }}>
        Create Course
      </button>
    );
}