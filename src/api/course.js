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