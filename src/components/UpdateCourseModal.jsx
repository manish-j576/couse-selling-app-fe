import { useState } from "react";
import { useAdminButton } from "../Provider/AdminButtonContext";
import { SelectCourseComponent } from "./SelectCourseComponent";

export function UpdateCourseModal(){
    const AdminButtonContext = useAdminButton()
    const [title , setTitle] = useState()
    const [description , setDescription] = useState()
    const [price , setPrice] = useState()

    async function handleSubmit() {

    }

    return (<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Update Course</h2>
          <div className="flex flex-col gap-3">
            <div className="w-full rounded">

            <SelectCourseComponent title={title}  description={description}  price={price} setTitle={setTitle} setDescription={setDescription} setPrice={setPrice}>
            </SelectCourseComponent>
            </div>
            <div className="flex justify-end gap-2 pt-3">
              <button
                type="button"
                onClick={()=>{
                    AdminButtonContext.setUpdateCourseModal(false)
                }}
                className="px-4 py-2 border rounded"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleSubmit}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}