import { createContext , useContext , useEffect, useState } from "react";

const HeroSectionContext = createContext()

export function HeroSectionContextProvider ({children}){
  
  const [isHomeComponentMounted,setHomeComponentMounted] = useState(true);
    const [isMyCourseComponentMounted , setMyCourseComponentMounted] = useState(false);
    const [isCoursesComponentMounted , setCoursesComponentMounted] = useState(false);

    return (
      <HeroSectionContext.Provider
        value={{
          isHomeComponentMounted,
          isMyCourseComponentMounted,
          isCoursesComponentMounted,
          setHomeComponentMounted,
          setMyCourseComponentMounted,
          setCoursesComponentMounted
        }}
      >
        {children}
      </HeroSectionContext.Provider>
    );
}

export const useHeroSection = () => useContext(HeroSectionContext)