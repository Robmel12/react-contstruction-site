import { About } from "../../views/About";
import { Availabilities } from "../../views/Availabilities";
import { Contact } from "../../views/Contact";
import { Home } from "../../views/Home";
import { Portfolio } from "../../views/Portfolio";

export const Routes = [
    {
    name: 'home',
    index: true,
    element: <Home/>
 },
    {
    name: 'portfolio',
    path: 'portfolio',
    element: <Portfolio/>
 },
    {
    name: 'about',
    path: 'about',
    element: <About/>
 },
    {
    name: 'availabilities',
    path: 'availabilites',
    element: <Availabilities/>
 },
    {
    name: 'contact',
    path: 'contact',
    element: <Contact/>
 },
]