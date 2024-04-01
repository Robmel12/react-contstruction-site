import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './main.scss'; 
import { Route, RouterProvider, createBrowserRouter, createHashRouter, createRoutesFromElements } from "react-router-dom";
import { Error } from "./views/Error";
import { Routes } from "./assets/js/routes";
import { CurtainProvider } from "./utils/hooks/useTriggerCurtain";

const rootElement = document.querySelector("#root")

const root = ReactDOM.createRoot(rootElement);
const MainRoutes = Routes.map(e=>{
    return e.index ? <Route key={'index'} index element={e.element}/>:<Route key={e.path} path={e.path} element={e.element}/>
})

const router = createHashRouter(createRoutesFromElements(
    <Route element={<CurtainProvider><App/></CurtainProvider>} path='/' errorElement={<Error/>}>
        {MainRoutes}
        {/* <Route path="*" element={<Error/>}></Route> */}

</Route>

))

root.render(
    
      <RouterProvider router={router}/>
  
    

)