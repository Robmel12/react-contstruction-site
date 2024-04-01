import { useState, useContext, createContext } from "react";

const DisableScrollContext = createContext()
const UpdateDisableScrollContext = createContext()
export function useDisableScroll(){
    return useContext(DisableScrollContext)
}
export function useDisableScrollUpdate(){
    return useContext(UpdateDisableScrollContext)
}
export function DisableScrollProvider({children}){

const [disableScroll, setDisableScroll] = useState(false);

return(
    <>
    <DisableScrollContext.Provider value={disableScroll}>
    <UpdateDisableScrollContext.Provider value={setDisableScroll}>
    {children}
    </UpdateDisableScrollContext.Provider>
    </DisableScrollContext.Provider>
    </>
)
}