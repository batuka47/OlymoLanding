import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhatIsXP = () => {
 
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
    <motion.div
      ref={ref}
      className="w-full h-screen bg-[#faf9f6] flex flex-col-reverse md:flex-row-reverse gap-4 items-center justify-center -z-40"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <article className="w-[90%] md:w-3/4 lg:w-2/3 flex flex-col gap-16 items-center p-4">
        <h1 className="font-normal text-3xl md:text-2xl xl:text-4xl text-[#303030]">
          <span className="font-bold">Olymo</span> гэж юу вэ  ?
        </h1>
        <p className="text-center font-semibold md:text-2xl text-4xl">
        Боловсролын холбогдолтой бүхий л гадаад дотоодын мэдээ мэдээлэл болон хичээл, уралдаантай уялдахуйц видео контентээр хангагч платформ.
        </p>
      </article>
    </motion.div>
  );
};

export default WhatIsXP;
