import { createContext , useState , useContext } from "react";

const AdminButtonContext = createContext();

export function AdminButtonContextProvider ({children}){
    
        const [createCourseModal , setCreateCourseModal] = useState(false);
        const [updateCourseModal , setUpdateCourseModal] = useState(false);
        const [deleteCourseModal,  setDeleteCourseModal] = useState(false);
        const [previewCourse , setPreviewCourse] = useState(false)

    return (
      <AdminButtonContext.Provider
        value={{
          createCourseModal,
          updateCourseModal,
          deleteCourseModal,
          previewCourse,
          setCreateCourseModal,
          setUpdateCourseModal,
          setDeleteCourseModal,
          setPreviewCourse,
        }}
      >
        {children}
      </AdminButtonContext.Provider>
    );
}


export const useAdminButton = () => useContext(AdminButtonContext);
