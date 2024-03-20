import { NavLink } from "react-router-dom"
import HamburgerButton from "./HamburgerBtn"
import { useState } from "react"

export const Nav = ({links}) => {
    const [cross, setcross] = useState(false)
    const hamburgerOnClick= (e)=>{
        setcross(!cross)
        
    } 
   const NavLinks = links.map(e=>{
       return <li key={e.path}> <NavLink key={e.name} to={e.path}>{e.name}</NavLink></li>
    })
    return(
      <>
      <HamburgerButton onClick={hamburgerOnClick} cross={cross}/>
       <header className={cross ? "active": ''} data-sticky>
        
       <nav className={cross ? "active": ''} >
        <ul>
        {NavLinks}
        </ul>
       </nav>
       </header>
       </>
    )
 }