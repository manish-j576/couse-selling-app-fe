import { AdminMainSection } from "../src/components/AdminMainSection";
import { AdminNavbar } from "../src/components/AdminNavbar";
import { Navbar } from "../src/components/Navbar";

export function AdminPage(){
    return <div>
        <AdminNavbar></AdminNavbar>
        <AdminMainSection></AdminMainSection>
    </div>
}