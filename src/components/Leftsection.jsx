import { House, Layers, Menu , MonitorPlay, PanelLeftClose} from "lucide-react";
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
        <div className="flex flex-col gap-1 text-xl transition-all ease-in-out">
          <div className="w-full bg-red-800 flex justify-center p-2 font-medium cursor-pointer hover:bg-red-500 ">
            <button>

            {LeftSectionContext.isLeftSectionfull ? "Home" : <House size={24}></House>}
            </button>
          </div>
          <div>
            <div className="w-full bg-red-800 flex justify-center p-2 font-medium cursor-pointer hover:bg-red-500">
              <button>

              {LeftSectionContext.isLeftSectionfull ? (
                "My Courses"
              ) : (
                <MonitorPlay size={24}></MonitorPlay>
              )}
              </button>
            </div>
          </div>
          <div>
            <div className="w-full bg-red-800 flex justify-center p-2 font-medium cursor-pointer hover:bg-red-500">
              <button>

              {LeftSectionContext.isLeftSectionfull ? (
                "Courses"
              ) : (
                <Layers size={24}></Layers>
              )}
              </ button>
            </div>
          </div>
        </div>
      </div>
    );
}