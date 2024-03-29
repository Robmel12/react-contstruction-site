import { useEffect, useState, forwardRef} from "react";
import { motion } from "framer-motion";



export const Rotate = (props) =>{
    const {children, ease='linear', rotation=0, delay=0, className='', duration=0} = props
    

      return ( <motion.div className={className} transition={{ease: ease, duration: duration, delay: delay}}animate={{x: x}}>{children}</motion.div>
      )

 }
 