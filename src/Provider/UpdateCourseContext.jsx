import { createContext , useContext , useState } from "react";

const UpdateContext = createContext();

export function UpdateContextProvider ({children}){
    const [courseName , setCourseName]  = useState()
    const [newValue , setNewValue] = useState()
    const [parameter , setParameter] = useState()
    const [loading , setLoading] = useState(false)
    const obj = {
      courseName,
      setCourseName,
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

const useUpdate = () => useContext(UpdateContext)