import { useEffect, useState, forwardRef} from "react";
import { motion } from "framer-motion";
import reactDom from "react-dom";
import { useCurtain } from "../hooks/useTriggerCurtain";



export const Curtain = (props) =>{

    const {duration, delay, ease} = props;
   const drawCurtain = useCurtain()
      return reactDom.createPortal( <motion.div className='curtain' transition={drawCurtain? {ease: ease, delay: delay, duration: duration}: ''}animate={{x: drawCurtain? '100vw': 0}}></motion.div>, document.getElementById('curtainPortal')
      )

 }