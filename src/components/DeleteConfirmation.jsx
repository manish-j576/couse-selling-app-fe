import { DeleteCourseRequest } from "../api/course"
import { useAdminButton } from "../Provider/AdminButtonContext"

export function DeleteConfirmation({loading,setLoading,courseId}){
    const AdminButtonContext = useAdminButton()
    async function handleDelete(courseId) {
        try{
            const response = await DeleteCourseRequest(courseId)
            console.log(response)
            if(response.status == 200){
                alert(response.data.message)
                setLoading(false)
                AdminButtonContext.setDeleteCourseModal(false);
            }
        }catch(e){
            console.log(e)
        }
        
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Delete a course
          </h2>

          <p className="mt-3 text-gray-600">
            Are you sure you want to delete this course?
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={() => {
                setLoading(false)

              }}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                handleDelete(courseId)
              }}
              className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
}