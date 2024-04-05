import { useInView } from "framer-motion";
import { useRef} from "react";



export const FadeOnView= (props)=>{

  const ref = useRef(null)
  
    const { style= {}, children, className='', transition='', once=false} = props
    const isInView = useInView(ref, {once: once});
    

      return ( <span  ref={ref} className={className} style={ 
   {...style,  opacity: isInView ? 1 : 0, transition:transition}} >{children}</span>
      )

 }
 
