import { House, Menu , PanelLeftClose} from "lucide-react";
import { useLeftSectionContext } from "../Provider/LeftSectionContext";

export function LeftSection (){
  const LeftSectionContext = useLeftSectionContext()
    return (
      <div className={`w-full bg-amber-300 h-[calc(100vh-4rem)] `}>
        <div
          className={`${
            LeftSectionContext.isLeftSectionfull
              ? "justify-left pl-3"
              : "justify-center"
          } flex  text-2xl p-2`}
        >
          <button
            onClick={() => {
              LeftSectionContext.setLeftSectionfull(
                !LeftSectionContext.isLeftSectionfull
              );
            }}
          >
            {LeftSectionContext.isLeftSectionfull ? (
              <PanelLeftClose></PanelLeftClose>
            ) : (
              <Menu></Menu>
            )}
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full bg-red-800 flex justify-center p-2 font-medium cursor-pointer hover:bg-red-500 ">
            {LeftSectionContext.isLeftSectionfull ? "Home" : <House></House>}
          </div>
        </div>
        <div>
          <div className="w-full bg-red-800 flex justify-center p-2 font-medium cursor-pointer hover:bg-red-500">
            {LeftSectionContext.isLeftSectionfull ? (
              "Purchases"
            ) : (
              <House></House>
            )}
          </div>
        </div>
        <div>
          <div className="w-full bg-red-800 flex justify-center p-2 font-medium cursor-pointer hover:bg-red-500">
            {LeftSectionContext.isLeftSectionfull ? "Courses" : <House></House>}
          </div>
        </div>

      </div>
    );
}