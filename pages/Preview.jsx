import { AdminNavbar } from "../src/components/AdminNavbar";
import { GoBack } from "../src/components/GoBack";
import { PreviewAdminCourse } from "../src/components/PreviewAdminCourses";

export function Preview(){
    return <div>
        <AdminNavbar></AdminNavbar>

        <GoBack></GoBack>
        <PreviewAdminCourse></PreviewAdminCourse>
    </div>
}