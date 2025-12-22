
import { SelectCourseComponent } from "./SelectCourseComponent";

export function UpdateCourseModal(){
    return (<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Update Course</h2>
          <div className="flex flex-col gap-3">
            <div className="w-full rounded">
            <SelectCourseComponent>
            </SelectCourseComponent>
            </div>
          </div>
        </div>
      </div>
    );
}