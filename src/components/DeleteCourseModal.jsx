import { useEffect, useRef, useState } from "react";
import { SendPreviewCourseRequest } from "../api/course";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { useAdminButton } from "../Provider/AdminButtonContext";

export function DeleteCourseModal(){
    const AdminButtonContext = useAdminButton()
    const [CoursesArray , SetCoursesArray] = useState([]);
    const [loading , setLoading] = useState(false);
    const courseId = useRef()
    useEffect(()=>{
            sendRequest();
        },[])
    
    async function sendRequest() {
        try{
            const response = await SendPreviewCourseRequest();
            SetCoursesArray(response.data);
        }catch(e){
            console.log(e)
        }
    }
    async function handleSubmit() {
        try{
            console.log("handle submit pressed")
            setLoading(true)

        }catch(e){
            console.log(e)
        }
    }
    return (<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Delete Course</h2>
          <div className="flex flex-col gap-3">
            <div className="w-full rounded flex flex-col gap-2">
                <select
                  className="w-full px-3 py-2 border rounded-lg"
                  ref={courseId}
                >
                  {CoursesArray.map((element) => {
                    return <option value={element._id}>{element.name}</option>;
                  })}
                </select>
                <div className="flex justify-end gap-2 pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      AdminButtonContext.setDeleteCourseModal(false);
                    }}
                    className="px-4 py-2 border rounded"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white rounded"
                    onClick={handleSubmit}
                  >
                    {loading ? "Loading..." : "Delete"}
                  </button>
                  {loading && <DeleteConfirmation loading={loading} setLoading={setLoading} courseId={courseId.current.value}></DeleteConfirmation>}
                </div>
              </div>
            </div>
          </div>
        </div>

      //
    );
}