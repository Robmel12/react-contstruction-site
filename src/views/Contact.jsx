
import ResetScrollBar from "../utils/hooks/ResetScrollBar"
import { Curtain } from "../utils/components/Curtain"
import { useOutletContext } from "react-router-dom"

export const Contact= () => { 
    
// ResetScrollBar()
  return(
    <>
   <Curtain context={useOutletContext().curtainProps}/>
    <h1>Contact</h1>
    </>
)
}