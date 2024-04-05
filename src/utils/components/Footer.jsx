import { NavLink } from "react-router-dom"
import { useState } from "react"

export const Footer = ({links}) => {
   const FooterLinks = links.map(e=>{
       return <li className='nav-links text-xl uppercase georama'key={e.path}> <NavLink key={e.name} to={e.path}>{e.name}</NavLink></li>
    })
    return(
      <>
        <footer className="relative w-full flex flex-col justify-center items-center pb-8">
            <div className="block relative w-9/12 pt-8 pb-3 flex items-center" style={{height: '120px'}}>
                
        <img className="ml-9 h-full" src={require('../../assets/imgs/HomeMakersLogo.png')}/>
        </div>
      <div className='w-10/12 flex'>
            <div className="w-6/12 flex justify-center items-enter">
              
                <h3 className="georama text-7xl w-8/12">Build a dream that lasts generations.</h3>
             
            </div>
          
                <div className="w-6/12 flex justify-center items-start">
                    <ul className="flex gap-2 flex-col">
                        {FooterLinks}
                    </ul>
                    </div>
                    </div>
                    
            <div className='pt-8 w-8/12 georama'>
                <p>1101 SUTTER STREET, SAN FRANCISCO, CALIFORNIA 94109

</p>
<p>T : 415.442.4800 E : INFO@MARTINBUILDING.COM</p>
            </div>
       </footer>
       </>
    )
 }