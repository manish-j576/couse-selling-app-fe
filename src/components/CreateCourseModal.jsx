import { useRef, useState } from "react";
import { useAdminButton } from "../Provider/AdminButtonContext";
import { CreateCourseRequest } from "../api/course";

export function CreateCourseModal() {
  const [loading , setLoading] = useState(false);
  const AdminButtonContext = useAdminButton();
        const title = useRef("")
        const description = useRef("")
        const price = useRef()
        const imageURL = useRef("");
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     imageUrl: "",
//   });
//   function handleChange(e) {
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
//   }

 async function HandleOnclick() {
   try {
    setLoading(true)
     const response = await CreateCourseRequest(
       title.current.value,
       description.current.value,
       price.current.value,
       imageURL.current.value
     );
     alert(response.data.message)
     setLoading(false)
     AdminButtonContext.setCreateCourseModal(false)
   } catch (error) {
    alert("something went wrong")
    setLoading(false)
    AdminButtonContext.setCreateCourseModal(false)
   }

   // onClose();
 }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create Course</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            ref={title}
            className="w-full border px-3 py-2 rounded"
            required
            />

          <textarea
            name="description"
            placeholder="Course Description"
            ref={description}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Course Price"
            ref={price}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            ref={imageURL}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              onClick={()=>{
                AdminButtonContext.setCreateCourseModal(false)
              }}
              className="px-4 py-2 border rounded"
              >
              Close
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={HandleOnclick}
              >
              {loading ? "Loading..." : "Submit" }
            </button>
          </div>
      </div>
              </div>
    </div>
  );
}