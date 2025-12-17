import axios from "axios";
import { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";
import { useBuy } from "../Provider/BuyModalContext";
import { BuyModal } from "./BuyModal";

export function AllCoursesComponent() {
    const [courseDetails , setCourseDetails] = useState([])
    const BuyModalContext = useBuy()
  useEffect(() => {
    loadCards();
  }, []);
  async function loadCards() {
    const response = await axios.get(
      "http://localhost:3000/api/course/preview"
    );
    setCourseDetails(response.data.response);
    console.log(response.data.response);
  }
  return (
    <div className="p-10 flex gap-10 flex-wrap">
      {courseDetails.map((course) => {
        return (
          <>
            <CourseCard
              key={course.title}
              title={course.name}
              description={course.description}
              price={course.price}
              imgUrl={course.imageURL}
              courseId={course._id}
            ></CourseCard>
          </>
        );
      })}
      {BuyModalContext.openBuyModal && (
        <BuyModal></BuyModal>
      )}
    </div>
  );
}
