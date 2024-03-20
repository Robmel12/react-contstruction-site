
import { Reveal } from "../utils/components/Reveal"
import { Curtain } from "../utils/components/Curtain"
import { useState, useRef} from "react"
import { homeContent } from "../utils/home"
import setDelaySequence from "../utils/hooks/setDelaySequence"
import Fade from "../utils/components/Fade"
import { motion } from "framer-motion"
import SmoothScroll from "../utils/components/SmoothScroll"

export const Home = () => {
    const [titleHeadings, setTitleHeadings] = useState('')
    const [reverse, setReverse] = useState(false);
    const BackgroundImg = useRef(null)
    const MainImageReveal = useRef(null)
    const MainImage = useRef(null)
    const SectionTwoImage = useRef(null)
    const curtainRef = useRef()
    console.log(BackgroundImg)

const {hero_image, home_intro} = homeContent;
const headings = hero_image.title.headings.map((e, index)=>{
    return <motion.h1 key={e}>{e}</motion.h1>
})
const headingsLogo = setDelaySequence({reverse:true,el: 'img', delay: 1.9, array: [hero_image.title.image], props: {alt: hero_image.title.image.alt, className: `logo fade-in ${titleHeadings}`, src: require(`../assets/imgs/${hero_image.title.image.src}`)}})
const headingsLine = setDelaySequence({el: 'div', array: [{}], delay: 2.3, props: {className: `hl grow ${titleHeadings}`}} )
    return(
        <>  
  

    <section className="home">
   
   

    
    <section className='home-intro flex' >
    <div className="hero-image">
   <img alt={hero_image.background.image.alt} className="background-image" src={require(`../assets/imgs/${hero_image.background.image.src}`)}/>
    <div class="background-gradient"></div> 
   
    </div>
    
  
        <section className="flex">
                <div className="hero-image" >
        {/* <Reveal  ref={MainImageReveal} direction="showRight"> */}
            <img src={require(`../assets/imgs/${hero_image.background.image.src}`)} className="main-image"/>
        {/* </Reveal> */}
        </div>
 
     
      <div className="hero-image">
    
                <div className="title">
                <img alt={ hero_image.title.image.alt} className= {`logo ${titleHeadings} reveal active`} src= {require(`../assets/imgs/${hero_image.title.image.src}`) }/>
                
                {headings}
               
                {headingsLine}
            
                </div>
                </div>
             
                </section>
                </section>
   
        <section className="section-1">
          
           
        <div>
        <Fade opacityStart={0} opacityEnd={1}><h3 className="section-tag fade">{home_intro.section_1.section_tag}</h3>      </Fade>
                <h2 className="heading">{home_intro.section_1.heading}</h2>
                </div>
                <div className="section-content">
                <div className="hl"></div> 
                <p className="content">
                    {home_intro.section_1.content}
                </p>
            </div>
      
            
        </section>
  
  
   
        <section className="section-2">
        <div className="container n1">
        <div >
                        
                        <p>Ethically Sourced.</p> 
                        <p>Dedication</p>
                     <p> Precision</p> 
                </div>
                </div>
        
        <div className="container n1">
     
            <picture alt="Picture of a building." className="rollOutOnScroll">
                    <source srcSet={require(`../assets/imgs/${hero_image.background.image.src}`)}/>
                    <img src={require(`../assets/imgs/${hero_image.background.image.src}`)} alt="Picture of a building."/>
                    </picture>
                  </div>
                <div className="container n2"><div><h3 className="section-tag fade fadeInOnEntry">From Start To Finish</h3></div><div><h3>MULTIFAMILY RESIDENTIAL</h3>
                    <h3>HISTORIC RENOVATIONS</h3>
                    <h3>COMMERCIAL OFFICES</h3>
                    <h3>RESTAURANTS AND RETAIL</h3>
                    <h3>COMMUNITY SPACES</h3><button className="btn"><span>About Us</span><span className="btn-background"></span></button></div><picture alt="Picture of a building." className="rollOutOnScroll" >
                    <source srcSet="./assets/images/pexels-expect-best-323780.jpg"/>
                    <img className="reveal showUp"   src="./assets/images/pexels-expect-best-323780.jpg" alt="Picture of a building."/>   
                    </picture></div>


        </section>
        {/* <Curtain ref={curtainRef} color="black"/> */}

   

    </section>

    </>
) }