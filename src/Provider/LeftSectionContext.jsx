import { createContext, useContext, useState } from "react";

const LeftSectionContext = createContext()

export function LeftSectionContextProvider ({children}){
    const [isLeftSectionfull , setLeftSectionfull] = useState(true)
    return <LeftSectionContext.Provider value={{isLeftSectionfull , setLeftSectionfull}}>
        {children}
    </LeftSectionContext.Provider>
}

export const useLeftSectionContext = ()=> useContext(LeftSectionContext);

