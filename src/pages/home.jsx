import React from 'react'

import logo from '../assets/OlymoLogo.svg'
import backdrop from "../assets/Frame 70.svg"
import backdropBottom from "../assets/Frame 71.svg"
import phoneBackDrop from "../assets/Frame 30.svg"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useEffect, useState } from 'react';
const Home = () => {
    const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.main 
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={sectionVariants}
    className='w-full h-screen bg-[#FAF9F6] relative flex flex-col items-center justify-start pt-32 md:p-0 md:justify-center overflow-visible'>
      <img src={backdrop} alt="" className='w-full absolute xl:-top-16 md:top-0 md:block hidden'/>
      <motion.div
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className='w-full p-4 flex flex-col items-center justify-start gap-2 relative '>
          <h1 className='text-3xl text-[#303030] absolute -top-4'>Welcome to</h1>
          <img src={logo} alt="xperience logo" className='h-40 w-auto text-[#121212]'/>
      </motion.div>
      <img src={phoneBackDrop} alt=""  className='w-full absolute md:hidden top-1/3'/>
      <img src={backdropBottom} alt="" className='rotate-180 w-full absolute  hidden md:block md:-bottom-1/2 z-50'/>
    </motion.main>
  )
}

export default Home