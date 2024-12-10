import React from 'react';
import { motion } from 'framer-motion';

const AbtWebsite = () => {
  return (
    <body className="w-full h-screen bg-[#faf9f6] flex flex-col items-center justify-center -z-40">
      <article className="w-[90%] md:w-3/4 lg:w-2/3 flex flex-col items-center p-4">
        <h3 className="text-xl">isn't it just a job portal website?</h3>
        <h1 className="font-normal text-3xl md:text-2xl xl:text-4xl text-[#303030] mt-4">
          what is so<span className="font-bold"> Unique </span> about Xperience?
        </h1>
      </article>
      <section className="w-full h-screen md:flex items-center px-12 py-6 overflow-hidden hidden">
        <div className="w-full h-full bg-[#121212] rounded-3xl text-[#faf9f6] relative flex items-center pl-8">
          <p className="font-bold text-xl absolute top-3 w-full text-center py-3">
            Come on! I have to keep it secret, you know!
          </p>
          <motion.h1
            className="text-8xl w-fit whitespace-nowrap"
            initial={{ x: "100%" }}
            animate={{
              x: ["100%", "-100%"], // Moves the text from right to left
            }}
            transition={{
              repeat: Infinity, // Infinite loop
              duration: 14, // Adjust speed
              ease: "linear",
            }}
          >
            Let's juuust say it will be the <span className="font-bold"> Xperience </span>
            of your life
          </motion.h1>
        </div>
      </section>
      <div className="md:hidden w-full flex flex-col items-center justify-center text-xl gap-3 mt-6">
        <p>Duck around and find out!</p>
        <p>just kidding</p>
        <p className="text-3xl text-center">
          Let's just say it will be the <span className="font-bold text-3xl">Xperience</span> of your life
        </p>
      </div>
    </body>
  );
};

export default AbtWebsite;
