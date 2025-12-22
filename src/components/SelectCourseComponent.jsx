import { useEffect, useRef, useState } from "react"
import { SendPreviewCourseRequest, UpdateCourseRequest } from "../api/course";
import { useUpdate } from "../Provider/UpdateCourseContext";
import { useAdminButton } from "../Provider/AdminButtonContext";

export function SelectCourseComponent(){
    const [CoursesArray , SetCoursesArray] = useState([])
    const [loading , setLoading] = useState(false)
    const AdminButtonContext = useAdminButton()
    const UpdateContext = useUpdate()
    const courseId = useRef()
    const parameter = useRef()
    const newValue = useRef()
    useEffect(()=>{
        sendRequest();
    },[])

     async function sendRequest() {
       const response = await SendPreviewCourseRequest();
       SetCoursesArray(response.data);
     }
     
    async function handleSubmit() {
        try{
            setLoading(true)
            UpdateContext.setCourseId(courseId.current.value)
            UpdateContext.setParameter(parameter.current.value);
            UpdateContext.setNewValue(newValue.current.value)
            console.log(courseId.current.value);
            const response = await UpdateCourseRequest(
                courseId.current.value,
                parameter.current.value,
                newValue.current.value
            );
            alert(response.data.message);
            setLoading(false)
            AdminButtonContext.setUpdateCourseModal(false);
        }catch(error){
            console.log(error)
        }
        }
    
    return (
      <div className="w-full h-full flex flex-col gap-2">
        <select
          className="w-full px-3 py-2 border rounded-lg"
          ref={courseId}
        >
          {CoursesArray.map((element) => {
            return <option value={element._id}>{element.name}</option>;
          })}
        </select>
        <select
          className="w-full px-3 py-2 border rounded-lg"
          ref={parameter}
        >
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="price">Price</option>
          <option value="imageURL">ImageUrl</option>
        </select>

        <input
          type="text"
          placeholder="Enter new value"
          className="w-full border px-3 py-2 mb-3 rounded"
          ref={newValue}
        ></input>
        <div className="flex justify-end gap-2 pt-3">
          <button
            type="button"
            onClick={() => {
              AdminButtonContext.setUpdateCourseModal(false);
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
    );
        
}