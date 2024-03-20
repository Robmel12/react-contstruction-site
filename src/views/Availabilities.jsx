
import { useOutletContext } from "react-router-dom"
import { Curtain } from "../utils/components/Curtain"
import ResetScrollBar from "../utils/hooks/ResetScrollBar"

export const Availabilities= () => { 
    
//  ResetScrollBar()
  return(
    <>
  <Curtain context={useOutletContext().curtainProps}/>
    <h1>Availabilitiest</h1>
    </>
)
}