import { useState, useContext, createContext } from "react";

const CurtainContext = createContext()
const UpdateCurtainContext = createContext()
export function useCurtain(){
    return useContext(CurtainContext)
}
export function useCurtainUpdate(){
    return useContext(UpdateCurtainContext)
}
export function CurtainProvider({children}){

const [Curtain, setCurtain] = useState(false);

return(
    <>
    <CurtainContext.Provider value={Curtain}>
    <UpdateCurtainContext.Provider value={setCurtain}>
    {children}
    </UpdateCurtainContext.Provider>
    </CurtainContext.Provider>
    </>
)
}