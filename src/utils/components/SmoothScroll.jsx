import React, { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  useTransform,
  useSpring,
  motion,
  useScroll,
  useMotionValueEvent
} from "framer-motion"

const SmoothScroll = ({ children }) => {
  // scroll container
  const scrollRef = useRef(null)

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0)
  const [isloading, setIsloading] = useState(true);
  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback(entries => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  // observe when browser is resizing
  useLayoutEffect(() => {
    spring.stop();
    const resizeObserver = new ResizeObserver(entries =>
      resizePageHeight(entries)
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])
  
  const { scrollYProgress } = useScroll() // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(scrollYProgress, physics);
  const y = useTransform(spring, (value)=>{
    return value * -pageHeight;
  })
   // easing of smooth scroll
   // apply easing to the negative scroll value
useEffect(()=>{
spring.stop();
  return ()=>{
  spring.stop();
  }
},[scrollRef])
  return (
    <>
  
      <motion.div
        ref={scrollRef}
        style={{ y: !isloading? y: 0 }} // translateY of scroll container using negative scroll value
        className="w-screen fixed top-0"
      >
        {children}
      </motion.div>
      {/* blank div that has a dynamic height based on the content's inherent height */}
      {/* this is neccessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      <div style={{ height: pageHeight }} />
    </>
  )
}

export default SmoothScroll
