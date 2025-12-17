import { createContext , useContext , useState } from "react";

const BuyModalContext = createContext()

export function BuyModalContextProvider ({children}){
    const [openBuyModal, setOpenBuyModal] = useState(false);
    const [courseId , setCourseId]  = useState(null)
    return (
      <BuyModalContext.Provider
        value={{ openBuyModal, courseId, setCourseId, setOpenBuyModal }}
      >
        {children}
      </BuyModalContext.Provider>
    );
}

export const useBuy = () => useContext(BuyModalContext)