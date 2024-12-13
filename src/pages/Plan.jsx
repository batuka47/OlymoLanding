import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import instaprofile from '../assets/insta.svg';
import mockUpPhoto from '../assets/olymoPlatform.svg';
import touringEvent from '../assets/img.svg';
import release from '../assets/iPhone16Pro.svg';

const Plan = () => {
  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.4 }, // Delay based on index
    }),
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      
      className="w-full h-auto md:h-screen bg-[#faf9f6] flex flex-col gap-4 px-8 py-4 items-center justify-center -z-40"
    >
      <header>
        <h1 className="font-normal text-3xl md:text-2xl xl:text-4xl text-[#303030]">
          Бид зорилгоо <span className="font-bold">бодит</span> болгохын тулд...
        </h1>
      </header>
      <div ref={ref} className="w-full h-auto md:h-4/5 flex flex-col md:flex-row items-start justify-start md:justify-center gap-5 py-4">
        <motion.div
          className="w-[90%] md:w-1/4 h-[500px] border-2 border-[#303030] rounded-3xl relative overflow-hidden"
          custom={0} // Delay for this card
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <div className="p-4">
            <p className="mt-2 flex flex-col gap-0">
              <span>...marketing & social media</span>
              <span className="text-xl font-bold">Коммьюнити үүсгэлт</span>
            </p>
            <img
              src={instaprofile}
              alt="people icon"
              className="absolute -bottom-20 rounded-3xl"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-[90%] md:w-1/4 h-[400px] md:h-[500px] border-2 border-[#303030] rounded-3xl relative overflow-hidden"
          custom={1} // Delay for this card
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <div className="p-4">
            <p className="mt-2 flex flex-col gap-0">
              <span>... frontend & backend</span>
              <span className="text-xl font-bold">Платформ хөгжүүлэлт</span>
            </p>
            <img
              src={mockUpPhoto}
              alt="people icon"
              className="absolute -bottom-4 rounded-3xl md:scale-125"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-[90%] md:w-1/4 h-[500px] border-2 border-[#303030] rounded-3xl relative overflow-hidden"
          custom={2} // Delay for this card
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <div className="p-4">
            <p className="mt-2 flex flex-col gap-0">
              <span>... аялан танилцуулга</span>
              <span className="text-xl font-bold">Биет эвентүүд</span>
            </p>
            <div className="w-fit h-fit rounded-3xl border-3 border-[#303030]">
              <img
                src={touringEvent}
                alt="people icon"
                className="absolute -bottom-2 scale-100"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-[90%] md:w-1/4 h-[500px] border-2 bg-[#121212] text-[#faf9f6] border-[#303030] rounded-3xl relative overflow-hidden"
          custom={3} // Delay for this card
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <div className="p-4">
            <p className="mt-2 flex flex-col gap-0">
              <span>... нэвтрүүлэлт</span>
              <span className="text-xl font-bold">Olymo Platform 1.0</span>
            </p>
            <img
              src={release}
              alt="people icon"
              className="absolute -bottom-2 rounded-3xl scale-150"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Plan;
