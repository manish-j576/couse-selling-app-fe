import axios from "axios";
import { Card } from "./Card";
import { useEffect, useState } from "react";

export function MyCoursesComponent (){
    const [courseDetails , setCourseDetails] = useState([])
    useEffect(()=>{
         loadCards();
    },[])
    async function loadCards(){
        const token = localStorage.getItem("token")
        const response = await axios.get(
          "http://localhost:3000/api/user/courses/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setCourseDetails(response.data);
    }
    return (
        <div className="p-10 flex gap-10 flex-wrap">
            {courseDetails.map(course => {
                return (
                  <Card
                    title={course.name}
                    description={course.description}
                    price={course.price}
                    imgUrl={course.imageURL}
                  ></Card>
                );
            } )}
        </div>
      
    );
}