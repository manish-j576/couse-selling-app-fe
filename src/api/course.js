import axios from "axios";

export async function CreateCourseRequest(title , description , price , imageURL){
    console.log("insde Create Course Request")
    console.log(title)
    console.log(description)
    console.log(price)
    console.log(imageURL)
    const token = localStorage.getItem("admintoken")
    const createCourseResponse = await axios.post(
      "http://localhost:3000/api/admin/createCourse/",
      {
        title:title,
        description:description,
        price:price,
        imageURL:imageURL,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return createCourseResponse;
}

export async function SendPreviewCourseRequest(){
  const token = localStorage.getItem("admintoken")
  console.log(token)
  const previewCourseResponse = await axios.get(
    "http://localhost:3000/api/admin/showCourses",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return previewCourseResponse;
}

export async function  UpdateCourseRequest(courseId, parameter , newValue) {
  console.log("inside update request")
  console.log(courseId);
  
  const token = localStorage.getItem("admintoken")
  if(parameter == "price"){
    newValue = Number(newValue)
  }
  const response = await axios.patch(
    `http://localhost:3000/api/admin/changeCourse/${courseId}`,
    {
      [parameter]:newValue
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response;
  
}

export async function DeleteCourseRequest(courseId) {
  const token = localStorage.getItem("admintoken")
  console.log("token here  : " + token)
  const response = await axios.delete(
    "http://localhost:3000/api/admin/deleteCourse",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        courseId:courseId
      }
    },
    
    
  );
  return response
}