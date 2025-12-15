import { createContext , useContext , useState } from "react";

const HeroSectionContext = createContext()

export function HeroSectionContextProvider ({children}){
    const [isHomeComponentMounted,setHomeComponentMounted] = useState(true);
    const [isPurchaseComponentMounted , setPurchaseComponentMounted] = useState(false);
    const [isCourseComponentMounted , setCourseComponentMounted] = useState(false);

    return (
      <HeroSectionContext.Provider
        value={{
          isHomeComponentMounted,
          isPurchaseComponentMounted,
          isCourseComponentMounted,
          setHomeComponentMounted,
          setPurchaseComponentMounted,
          setCourseComponentMounted
        }}
      >
        {children}
      </HeroSectionContext.Provider>
    );
}

export const useHeroSection = () => useContext(HeroSectionContext)