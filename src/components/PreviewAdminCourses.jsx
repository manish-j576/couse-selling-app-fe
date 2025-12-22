import { useEffect, useState } from "react"
import { SendPreviewCourseRequest } from "../api/course";
import { Card } from "./Card";

export function PreviewAdminCourse(){
    const [courseDetails , setCourseDetails] = useState([])
    useEffect(()=>{
        sendRequest();
    },[])

    async function sendRequest(){
        try{

            const response = await SendPreviewCourseRequest()
            setCourseDetails(response.data)
        }catch(error){
            console.log(error)
        }
    }
    return <div className="p-5 flex gap-10 flex-wrap">
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
}