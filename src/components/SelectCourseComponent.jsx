import { useEffect, useRef, useState } from "react"
import { SendPreviewCourseRequest } from "../api/course";

export function SelectCourseComponent(){
        const AdminButtonContext = useAdminButton()
    const [CoursesArray , SetCoursesArray] = useState([])
    const [SelectedCourse , setSelectedCourse] = useState()
    const [parameter , setParameter] = useState()
    const newValue = useRef()
    useEffect(()=>{
        sendRequest();
    },[])

    async function  sendRequest() {
        const response =await SendPreviewCourseRequest();
        SetCoursesArray(response.data)
        // console.log(response.data)   
    }
    return (
      <div className="w-full h-full flex flex-col gap-2">
        <select
          className="w-full px-3 py-2 border rounded-lg"
          value={SelectedCourse}
          onChange={(e) => {
            setSelectedCourse(e.target.value);
          }}
        >
          {CoursesArray.map((element) => {
            return <option value={element._id}>{element.name}</option>;
          })}
        </select>
        <select
          className="w-full px-3 py-2 border rounded-lg"
          value={parameter}
          onChange={(e) => {
            setParameter(e.target.value);
          }}
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