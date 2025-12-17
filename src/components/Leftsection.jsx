import { House, Layers, Menu , MonitorPlay, PanelLeftClose} from "lucide-react";
import { useLeftSectionContext } from "../Provider/LeftSectionContext";
import { useHeroSection } from "../Provider/HeroSectionContext";

export function LeftSection (){
  const LeftSectionContext = useLeftSectionContext()
  const HeroSectionContext = useHeroSection()
    return (
      <div
        className={`w-full bg-[#F5F5F5] h-[calc(100vh-4rem)] border-r-2 border-blue-400`}
      >
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
          <div className="w-full bg-[#dce6e2] flex justify-center p-2 font-medium cursor-pointer hover:bg-[#d9d9d4] ">
            <button
              onClick={() => {
                HeroSectionContext.setHomeComponentMounted(true);
                HeroSectionContext.setMyCourseComponentMounted(false);
                HeroSectionContext.setCoursesComponentMounted(false);
              }}
            >
              {LeftSectionContext.isLeftSectionfull ? (
                "Home"
              ) : (
                <House size={24}></House>
              )}
            </button>
          </div>
          <div>
            <div className="w-full bg-[#dce6e2] flex justify-center p-2 font-medium cursor-pointer hover:bg-[#d9d9d4]">
              <button
                onClick={() => {
                  HeroSectionContext.setHomeComponentMounted(false);
                  HeroSectionContext.setMyCourseComponentMounted(true);
                  HeroSectionContext.setCoursesComponentMounted(false);
                }}
              >
                {LeftSectionContext.isLeftSectionfull ? (
                  "My Courses"
                ) : (
                  <MonitorPlay size={24}></MonitorPlay>
                )}
              </button>
            </div>
          </div>
          <div>
            <div className="w-full bg-[#dce6e2] flex justify-center p-2 font-medium cursor-pointer hover:bg-[#d9d9d4]  ">
              <button
                onClick={() => {
                  HeroSectionContext.setHomeComponentMounted(false);
                  HeroSectionContext.setMyCourseComponentMounted(false);
                  HeroSectionContext.setCoursesComponentMounted(true);
                }}
              >
                {LeftSectionContext.isLeftSectionfull ? (
                  "Courses"
                ) : (
                  <Layers size={24}></Layers>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}