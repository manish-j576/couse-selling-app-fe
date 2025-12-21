import { CreateCourse } from "./CreateCourse";
import { DeleteCourse } from "./DeleteCourse";
import { PreviewCourse } from "./PreviewCourse";
import { UpdateCourse } from "./UpdateCourse";

export function AdminHomeButtonsContainer(){
    return (
      <div className=" w-100 p-4 flex flex-col gap-2">
        <CreateCourse></CreateCourse>
        <UpdateCourse></UpdateCourse>
        <DeleteCourse></DeleteCourse>
        <PreviewCourse></PreviewCourse>
        
      </div>
    );
}