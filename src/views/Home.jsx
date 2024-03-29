

import { Glide } from "../utils/components/Glide"
import { Reveal } from "../utils/components/Reveal"
import { useState, useRef, useEffect, useLayoutEffect} from "react"
import { homeContent } from "../utils/home"
import Fade from "../utils/components/Fade"
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence} from "framer-motion"
import { useScrollPosition } from "../utils/hooks/useScrollPosition"


export const Home = () => {
    
   const { scrollY }=useScrollPosition()
   const scrollPosition = useMotionValue(0)
   scrollPosition.set(scrollY)
    const ImageYTrans = useTransform(scrollPosition, (latest)=> {
        return -latest*1.2} )
    const LogoTrans = useTransform(scrollPosition, (latest)=> {
            return -latest*.5} )
    const HeadingTrans = useTransform(scrollPosition, (latest)=> {
        return -latest*.7} )
    const fromRight = {
        initial: {
          clipPath: 'inset(0 0 0 100%)',
          transition: {duration: 1, ease: 'easeOut'}
        },
        animate: {
          clipPath: 'inset(0 0 0 0)',
          transition: { duration: 1.05, delay: .75, ease: 'easeOut'}, 
        },
       
      }
      const growLineFromLeft ={
        initial:{
            width:0
        },
        animate:i=>({
            width: i.width,
            transition:{duration: 1, delay: i.delay + i.shift}
        })

      }
      const RotateInChildren={
        initial:{
            opacity: 0,
            rotate: 90,
            y: 100,
          
        },
        animate:{
            opacity: [0, .2, .5, .8, 1],
            rotate: 0,
            y: [100, 0],
            transition: {ease: 'easeInOut', duration: .9}
            
        },
        // exit:{
        //     opacity: 1,
        //     rotate: 0,
        //     y: 0,

        // }
      }
      const RotateInContainer ={
        initial:{
            opacity: 1,

        },
        animate:{
            opacity: 1,
            transition: { when: "beforeChildren", delayChildren: 1.25, staggerChildren: .5}
        }
        // exit:{
        //     opacity: 1,
        //     transition: {duration: 1, delay: 3, delayChildren: .5, staggerChildren: .5, staggerDirection: -1}
        // }

      }
      const FadeIn ={
        initial:{
            opacity: 0
        },
        animate:{
            opacity: 1,
            transition:{duration: 1, delay: 4}
        }

      }
      const  underline = [{delay: 3.5, shift:0, width: '150px'},{delay:3.5, shift: 1, width:'20px'}].map((item, i)=>{
       return <motion.span key={i} animate='animate' initial='initial' variants={growLineFromLeft} custom={item} class="hl relative h-1 inline-block mt-2"></motion.span>
      })
   
const {hero_image, home_intro} = homeContent;
const headings = hero_image.title.headings.map((e, index)=>{
    return <motion.h1 variants={RotateInChildren} style={{transformOrigin: 'top left'}} custom={{index:index, max: hero_image.title.headings.length }} className="text-8xl font-sans georama font-semibold leading-tight long-shadow" key={e}>{e}</motion.h1>
})


    return(
        <>  
  

    <section className="home block relative flex w-screen flex-col h-full">
   
   

    
    <section className=' block w-full relative' style={{height: '92dvh', minHeight: '400px'}}>
    <div className="hero-image block relative w-full h-full">
    <Glide className='main-image h-full' style={{width: '110%'}} x={0} from={-10}ease="easeOut" duration={.5} delay={1.2}><img alt={hero_image.background.image.alt} className="h-full object-cover" style={{width: '110%'}}src={require(`../assets/imgs/${hero_image.background.image.src}`)}/></Glide>
    <div class="background-gradient absolute block w-full h-full z-10 top-0"></div> 
    
    </div>
        <motion.div style={{y:LogoTrans, left: '16%'}} animate='animate' initial='initial' variants={FadeIn} className="absolute top-28 left-40 z-20"><img className="w-2/5" alt={homeContent.hero_image.title.image.alt}src={require(`../assets/imgs/${hero_image.title.image.src}`)}/></motion.div>
        <AnimatePresence> <motion.div style={{y:HeadingTrans, left: '15%'}} className="absolute top-48 z-30 mt-2"><motion.div  variants={RotateInContainer} initial='initial' animate='animate'>{headings}</motion.div><div style={{transform: 'translate(150px, -20px)'}}className='flex gap-12 paddingt-0 margint-0'>{underline}</div></motion.div></AnimatePresence>
    <motion.div style={{y:ImageYTrans, height: '95%'}} className="hero-image absolute w-1/3 top-0  right-48 top-12 z-20"  >
    <Reveal className='relative block h-full w-5/6' variants={fromRight}>
        <Glide className='main-image h-full' style={{width: '110%'}} x="-5px" ease="easeIn" duration={.9} delay={1.4}>
            <img  className='h-full w-full object-cover' src={require(`../assets/imgs/${hero_image.background.image.src}`)}/>
            </Glide>
            </Reveal>   
        </motion.div>       
     
        
                </section>
   
        <section className="section-1 mt-16">
          
           
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
     
            <picture alt="Picture of a building." >
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
     
     

   

    </section>

    </>
) }