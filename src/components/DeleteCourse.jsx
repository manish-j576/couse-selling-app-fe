import { useAdminButton } from "../Provider/AdminButtonContext"

export function DeleteCourse() {
    const AdminButtonContext = useAdminButton()

    async function  HandleDeleteCourse() {
        AdminButtonContext.setCreateCourseModal(false)
        AdminButtonContext.setUpdateCourseModal(false)
        AdminButtonContext.setDeleteCourseModal(true)
        AdminButtonContext.setPreviewCourse(false)
    }
  return (
    <button onClick={HandleDeleteCourse} className="rounded-lg bg-red-200 px-8 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50">
      Delete Course
    </button>
  );
}
