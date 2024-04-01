import { useEffect, useState, forwardRef} from "react";
import { motion } from "framer-motion";



export const Reveal = (props) =>{

    const {children, variants='', className=''} = props
    

      return ( <motion.div className={className} variants={variants}
              initial="initial"
              animate="animate"
              exit='exit'
              >{children}</motion.div>
      )

 }