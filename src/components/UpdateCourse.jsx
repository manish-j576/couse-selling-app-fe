import { useAdminButton } from "../Provider/AdminButtonContext";

export function UpdateCourse(){
    const AdminButtonContext = useAdminButton()
    async function HandleUpdateCourse() {
      AdminButtonContext.setCreateCourseModal(false);
      AdminButtonContext.setUpdateCourseModal(true);
      AdminButtonContext.setDeleteCourseModal(false);
      AdminButtonContext.setPreviewCourse(false);
    }
    return <button onClick={HandleUpdateCourse} className="rounded-lg bg-yellow-200 px-8 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50">
      Update Course
    </button>;
}