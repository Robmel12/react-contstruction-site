import { useEffect, useState, forwardRef} from "react";
import { motion } from "framer-motion";



export const Glide = (props) =>{
    const {style , children, ease='linear', x, from=0, delay=0, className='', duration=0} = props
    

      return ( <motion.div style={style} className={className} transition={{ease: ease, duration: duration, delay: delay}}animate={{x: [from, x]}}>{children}</motion.div>
      )

 }
 