import { useState, useContext, createContext } from "react";
const ScrollPositionContext = createContext()
const UpdateScrollPositionContext = createContext()
export function useScrollPosition(){
    return useContext(ScrollPositionContext)
}
export function useScrollPositionUpdate(){
    return useContext(UpdateScrollPositionContext)
}
export function ScrollPositionProvider({children}){

const [scrollPosition, setScrollPosition] = useState({scrollY:0, scrollX:0});

return(
    <>
    <ScrollPositionContext.Provider value={scrollPosition}>
    <UpdateScrollPositionContext.Provider value={setScrollPosition}>
    {children}
    </UpdateScrollPositionContext.Provider>
    </ScrollPositionContext.Provider>
    </>
)
}