import { useInView, motion, useAnimationControls} from "framer-motion";
import { useEffect, useRef} from "react";



export const IsInViewVariants= ( { style='', children, className='', variants={initial:'', animate:'', exit:''}, once=false, margin='' })=>{

  const ref = useRef(null)
    const isInView = useInView(ref, {once: once, margin: margin});
    const controls = useAnimationControls();
    useEffect(() => {
      if(isInView){
        controls.start('animate')
      }else{
        controls.start('initial')
      }
      
    }, [isInView, controls])
    

      return ( <motion.div 
        style={style}
        animate={ controls}
        variants={variants}
        ref={ref} 
        className={className} 
         >{children}</motion.div>
      )

 }
 
