
import React, { useRef, useState, useCallback, useEffect, useLayoutEffect } from "react";
import ScrollBar from 'smooth-scrollbar';
import { ScrollbarPlugin } from 'smooth-scrollbar';
import { DisableScrollProvider, useDisableScroll } from "../hooks/useDisableScroll";
import { useScrollPositionUpdate } from "../hooks/useScrollPosition";

const MomentumScroll = ({ children })=> {
 const setScrollPosition =  useScrollPositionUpdate()
  class DisableScrollPlugin extends ScrollbarPlugin {
    static pluginName = 'disableScroll';
    transformDelta(delta, fromEvent) {
      return {
        x: 0,
        y: 0,
      }
  }
  }

  const scrollRef = useRef(null);
  const disableScroll = useDisableScroll()
  useLayoutEffect(() => {
    scrollRef.current.style.width="100vw"
    scrollRef.current.style.height="100vh"
    scrollRef.current.style.overflow="auto"
    if(scrollRef.current){
     disableScroll && ScrollBar.use(DisableScrollPlugin)
     const scrollbar = ScrollBar.init(scrollRef.current)
      scrollbar.addListener(({ offset }) => {
    
        setScrollPosition(prev=>({...prev, scrollX: offset.x, scrollY: offset.y})); // offset y position
         // my element distance from top
        
    });
    
    }
    return () => ScrollBar.destroy()
  }, [scrollRef]);


  

  return (
    <>
 
      <div
        ref={scrollRef}>
       
        {children}
    
      </div>
 
    </>
  );
};

export default MomentumScroll;