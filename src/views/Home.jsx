import { Glide } from "../utils/components/Glide";
import { Reveal } from "../utils/components/Reveal";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { homeContent } from "../utils/home";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { useScrollPosition } from "../utils/hooks/useScrollPosition";
import { InView } from "../utils/components/InView";
import { FadeOnView } from "../utils/components/FadeOnView";

export const Home = () => {
  const backgroundTransition = useRef(null);
  const section_1Tag = useRef(null)
  const backgrountTransInView = useInView(backgroundTransition);
  const section_1TagInView = useInView(section_1Tag)
  const { scrollY } = useScrollPosition();
  const scrollPosition = useMotionValue(0);
  scrollPosition.set(scrollY);
  const ImageYTrans = useTransform(scrollPosition, (latest) => {
    return -latest * 1.2;
  });
  const LogoTrans = useTransform(scrollPosition, (latest) => {
    return -latest * 0.5;
  });
  const HeadingTrans = useTransform(scrollPosition, (latest) => {
    return -latest * 0.7;
  });
  const ScrollingWordsTrans = useTransform(scrollPosition, (latest) => {
    return -latest * 0.4 + 300;
  });
  const fromRight = {
    initial: {
      clipPath: "inset(0 0 0 100%)",
      transition: { duration: 1, ease: [0, 0.7, 0.8, 0.9] },
    },
    animate: {
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 0.75, delay: 1.2, ease: [0, 0.8, 0.5, 0.9] },
    },
  };
  const growLineFromLeft = {
    initial: {
      width: 0,
    },
    animate: (i) => ({
      width: i.width,
      transition: { duration: 0.75, delay: i.delay + i.shift },
    }),
  };
  const RotateInChildren = {
    initial: {
      opacity: 0,
      rotate: 45,
      y: 100,
      x: 100,
    },
    animate: {
      opacity: [0, 0.01, 0.02, 0.1, 0.5, 1],
      rotate: 0,
      y: 0,
      x: 0,
      transition: { ease: [0, 0.2, 0.7, 0.95], duration: 0.5 },
    },
    // exit:{
    //     opacity: 1,
    //     rotate: 0,
    //     y: 0,

    // }
  };
  const RotateInContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 1.3,
        staggerChildren: 0.15,
      },
    },
    // exit:{
    //     opacity: 1,
    //     transition: {duration: 1, delay: 3, delayChildren: .5, staggerChildren: .5, staggerDirection: -1}
    // }
  };
  const FadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 3 },
    },
  };
  const fadeInOnView = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  useEffect(() => {
    backgrountTransInView
      ? document.body.classList.add("bright")
      : document.body.classList.remove("bright");
  }, [backgrountTransInView]);
  const underline3 = [
    { delay: 2.45, shift: 0, width: "118px" },
    { delay: 2.4, shift: 1, width: "20px" },
  ].map((item, i) => {
    return (
      <motion.span
        key={i}
        animate="animate"
        initial="initial"
        variants={growLineFromLeft}
        custom={item}
        class="hl relative h-1 inline-block mt-2 long-box-shadow"
      ></motion.span>
    );
  });

  const { hero_image, home_intro } = homeContent;
  const headings = hero_image.title.headings.map((e, index) => {
    return (
      <motion.h1
        variants={RotateInChildren}
        style={{ transformOrigin: "top left", fontSize: '5.5rem' }}
        custom={{ index: index, max: hero_image.title.headings.length }}
        className="font-serif georama font-normal leading-tight long-shadow tracking-wide"
        key={e}
      >
        {e}
      </motion.h1>
    );
  });

  return (
    <>
      <section className="home block relative flex w-screen flex-col h-full">
        <section
          className=" block w-full relative"
          style={{ height: "92dvh", minHeight: "400px" }}
        >
          <div className="hero-image block relative w-full h-full">
            <Glide
              className="main-image h-full"
              style={{ width: "110%" }}
              x={0}
              from={-30}
              ease={"easeOut"}
              duration={0.4}
              delay={1.15}
            >
              <img
                alt={hero_image.background.image.alt}
                className="h-full object-cover"
                style={{ width: "110%" }}
                src={require(`../assets/imgs/${hero_image.background.image.src}`)}
              />
            </Glide>
            <div class="background-gradient absolute block w-full h-full z-10 top-0"></div>
          </div>{" "}
          <motion.div
            style={{ y: LogoTrans, left: "4%" }}
            animate="animate"
            initial="initial"
            variants={FadeIn}
            className="absolute top-16 left-40 z-20"
          >
            <img
              className="w-4/12"
              alt={homeContent.hero_image.title.image.alt}
              src={require(`../assets/imgs/${hero_image.title.image.src}`)}
            />
          </motion.div>
          <AnimatePresence>
            {" "}
            <motion.div
              style={{ y: HeadingTrans, left: "12%" }}
              className="absolute top-52 z-30 mt-1"
            >
              <motion.div
                variants={RotateInContainer}
                initial="initial"
                animate="animate"
              >
                {headings}
              </motion.div>
              <div
                style={{ transform: "translate(170px, -23px)" }}
                className="flex gap-6 paddingt-0 margint-0"
              >
                {underline3}
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div
            style={{ y: ImageYTrans, height: "98%" }}
            className="hero-image absolute w-5/12 top-0  right-40 top-12 z-20"
          >
            <Reveal
              className="relative block h-full w-11/12"
              variants={fromRight}
            >
              <Glide
                className="main-image h-full"
                style={{ width: "110%" }}
                x="-5px"
                ease="easeIn"
                duration={0.75}
                delay={1.25}
              >
                <img
                  className="h-full w-full object-cover main-image"
                  src={require(`../assets/imgs/${hero_image.background.image.src}`)}
                />
              </Glide>
            </Reveal>
          </motion.div>
        </section>
        <section className="home-main w-full flex flex-col">
          <section
            className="section-1 mt-24 w-8/12"
            style={{ marginLeft: (3 / 17) * 100 + "%" }}
          >
            <div className="flex flex-row">
              <div className="w-1/2 relative block">
                
                <FadeOnView transition={ {duration: 1} }>
                <h3 ref={section_1Tag} className="section-tag text-xl m-6">
                  {home_intro.section_1.section_tag}
                </h3>
                </FadeOnView>
              
                <h2 className="heading georama w-full text-6xl">
                  {home_intro.section_1.heading}
                </h2>
              </div>
              <div className="flex justify-center align-center w-1/2 self-center text-8xl relative block h-full">
                <div className="w-6/12 h-56 arrow-clip object-cover"></div>
              </div>
            </div>
            <div className="section-content mt-12 mb-12 w-11/12 flex justify-between">
              <div className="hl w-1/12 mb-12"></div>
              <p className="content justify-self-end w-9/12 text-xl mt-12">
                {home_intro.section_1.content}
              </p>
            </div>
          </section>

          <section
            className="section-2  mt-16 w-full"
            style={{ marginLeft: (3 / 17) * 100 + "%" }}
          >
            <div
              className="container n1 relative block flex flex-row mb-0"
              style={{ height: "500px" }}
            >
              <picture
                className="w-5/12 block relative "
                alt="Picture of a building."
              >
                <source
                  srcSet={require(`../assets/imgs/pexels-scott-webb-1029599.jpg`)}
                />
                <img
                  className="w-full object-cover h-full"
                  src={require(`../assets/imgs/${hero_image.background.image.src}`)}
                  alt="Picture of a building."
                />
              </picture>
              <motion.div
                style={{ y: ScrollingWordsTrans }}
                className="text-7xl georama w-6/12 self-center flex justify-center  flex-row"
              >
                <p className=" scrolling-upwards">Ethically Sourced.</p>
                <p className=" scrolling-upwards">Dedication</p>
                <p className=" scrolling-upwards"> Precision</p>
              </motion.div>
            </div>
            <span ref={backgroundTransition}></span>
            <div className="container n2 flex mt-0 block relative h-fit">
              <div className="absolute">
                <h3
                  className="section-tag"
                  style={{
                    transform: `rotate(90deg) translate(${100 + "%"}, ${
                      800 + "%"
                    })`,
                  }}
                >
                  From Start To Finish
                </h3>
              </div>
              <div className="w-5/12 flex flex-col justify-center items-center">
                <div
                  className="w-6/12 text-xl georama flex flex-col justify-center gap-4"
                  style={{ height: "500px" }}
                >
                  <h3>MULTIFAMILY RESIDENTIAL</h3>
                  <h3>HISTORIC RENOVATIONS</h3>
                  <h3>COMMERCIAL OFFICES</h3>
                  <h3>RESTAURANTS AND RETAIL</h3>
                  <h3>COMMUNITY SPACES</h3>
                  <button className="btn">
                    <span className="btn-text">About Us</span>
                    <span className="btn-background"></span>
                  </button>
                </div>
              </div>
              <picture alt="Picture of a building." className="w-7/12">
                <source
                  srcSet={require("../assets/imgs/pexels-scott-webb-1022936.jpg")}
                />
                <img
                  className="w-full object-cover"
                  style={{ height: "500px" }}
                  src={require("../assets/imgs/pexels-rodolfo-quirós-1876045.jpg")}
                  alt="Picture of a building."
                />
              </picture>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};
