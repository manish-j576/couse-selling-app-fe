
import { CreateCourse } from "./CreateCourse";
import { DeleteCourse } from "./DeleteCourse";
import { PreviewCourse } from "./PreviewCourse";
import { UpdateCourse } from "./UpdateCourse";
import { useAdminButton } from "../Provider/AdminButtonContext";
import { CreateCourseModal } from "./CreateCourseModal";
import { UpdateCourseModal } from "./UpdateCourseModal";
import { DeleteCourseModal } from "./DeleteCourseModal";

export function AdminHomeButtonsContainer(){
    const AdminButtonContext = useAdminButton()
    console.log(AdminButtonContext)
    return (
      <div className=" w-100 p-4 flex flex-col gap-2">
        <CreateCourse></CreateCourse>
        <UpdateCourse></UpdateCourse>
        <DeleteCourse></DeleteCourse>
        <PreviewCourse></PreviewCourse>
        {AdminButtonContext.createCourseModal && (
          <CreateCourseModal></CreateCourseModal>
        )}
        {AdminButtonContext.updateCourseModal && (
          <UpdateCourseModal></UpdateCourseModal>
        )}
        {AdminButtonContext.deleteCourseModal && (
          <DeleteCourseModal></DeleteCourseModal>
        )}
      </div>
    );
}