import { motion, useInView } from "framer-motion";
import { useRef} from "react";



export const FadeOnView= (props)=>{
  const ref = useRef(null)
  const isInView = useInView(ref, { once: props.once});
    const { children, className='', transition={duration: 1}} = props
    

      return ( <motion.div  ref={ref} className={className} style={ 
   { opacity: isInView ? 1 : 0, transition: transition}} >{children}</motion.div>
      )

 }
 
