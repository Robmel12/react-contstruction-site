import { useEffect, useState, forwardRef} from "react";




export const Curtain = forwardRef(function Curtain(props, ref) {
    
    
    useEffect(()=>{
        ref;
    },[])
      return ( <div style={{...props.style, position:  "absolute", width: "100vw", height:"100vh", backgroundColor: props.color}}></div>
      )

 })