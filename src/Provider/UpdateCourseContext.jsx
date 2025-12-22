import { createContext , useContext , useState } from "react";

const UpdateContext = createContext();

export function UpdateContextProvider ({children}){
    const [courseId, setCourseId] = useState();
    const [newValue , setNewValue] = useState()
    const [parameter , setParameter] = useState()
    const [loading , setLoading] = useState(false)
    const obj = {
      courseId,
      setCourseId,
      newValue,
      setNewValue,
      parameter,
      setParameter,
      loading,
      setLoading
    };
    return <UpdateContext.Provider value={obj}>
        {children}
    </UpdateContext.Provider>

}

export const useUpdate = () => useContext(UpdateContext)