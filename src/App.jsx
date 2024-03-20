import { Outlet } from "react-router-dom";
import { Nav } from "./utils/components/nav";
import { About } from "./views/About";
import { Routes } from "./assets/js/routes";

import HideBrowserScrollbar from "./utils/hooks/HideBrowserScrollbar";
import SmoothScroll from "./utils/components/SmoothScroll";
import { useEffect, useState } from "react";



const links = Routes.map(e=>{
   return  e.index? {name: e.name, path:'/'} : {name: e.name, path: e.path}
})


const App = ()=>{
    const fastSlow = 'cubic-bezier(0,.26,0,1.11)'
    const slowFast = 'cubic-bezier(.85,.17,.2,1.03)';
   
    HideBrowserScrollbar()
    
    const [loading, setloading] = useState(true)
    const curtainProps = {
        direction:"right", duration:'1s',timingFunction:fastSlow, delay:'1s', color:"black"
    }

    return(
    <>
    <Nav links={links}/>
 
    <main >
  <SmoothScroll>
   <Outlet/>
   </SmoothScroll> 
   
    </main>

    </>
    )
}
    


export default App;
