
import axios from "axios";
import { useBuy } from "../Provider/BuyModalContext";

export function BuyModal() {
        const BuyModalContext = useBuy()
        
       async function handlePurchaseRequest(courseId){
        try{
            const token = localStorage.getItem("token")
            console.log(token)
            const response = await axios.post(
              "http://localhost:3000/api/course/purchase",
              {
                courseId,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }
            );
            if(response.status == 200){
                BuyModalContext.setOpenBuyModal(false)
                alert(response.data.message)
            }
        }catch(error){
            alert(error.response.data.message)
        }
    }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Confirm Purchase
        </h2>

        <p className="mt-3 text-gray-600">
          Are you sure you want to buy this course?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
          onClick={()=>BuyModalContext.setOpenBuyModal(false)}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
          onClick={()=>{
            handlePurchaseRequest(BuyModalContext.courseId);
          }}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
