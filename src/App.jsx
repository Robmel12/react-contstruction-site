import { Outlet } from "react-router-dom";
import { Nav } from "./utils/components/nav";
import { About } from "./views/About";
import { Routes } from "./assets/js/routes";

import HideBrowserScrollbar from "./utils/hooks/HideBrowserScrollbar";

import { useEffect, useState } from "react";
import MomentumScroll from "./utils/components/MomentumScroll";
import { Curtain } from "./utils/components/Curtain";
import { useCurtainUpdate } from "./utils/hooks/useTriggerCurtain";
import { DisableScrollProvider } from "./utils/hooks/useDisableScroll";
import { ScrollPositionProvider } from "./utils/hooks/useScrollPosition";



const links = Routes.map(e=>{
   return  e.index? {name: e.name, path:'/'} : {name: e.name, path: e.path}
})


const App = ()=>{
    const fastSlow = 'cubic-bezier(0,.26,0,1.11)'
    const slowFast = 'cubic-bezier(.85,.17,.2,1.03)';
   
    HideBrowserScrollbar()
    const setDrawCurtain = useCurtainUpdate()
    useEffect(()=>{
        setDrawCurtain(true);

    },[])
    const curtainProps = {
        direction:"right", duration:'1s',timingFunction:fastSlow, delay:'1s', color:"black"
    }

    return(
    <>
    <DisableScrollProvider>
    <ScrollPositionProvider>
    <Nav links={links}/>
    
    <MomentumScroll>
    <main >
        <Curtain duration={.5} delay={1} ease={[.1,.9,.92,.95]}/>
   <Outlet/>

   
    </main>
    </MomentumScroll>
    </ScrollPositionProvider>
    </DisableScrollProvider>

    </>
    )
}
    


export default App;
