import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reasoning = () => {
  // Framer Motion Variants
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.55 }, // Delay based on index
    }),
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  // Content Array
  const content = [
    {
      head:'NEWS.',
      text:' Боловсрол болон уралдаан тэмцээн, олимпиадын талаарх мэдээ, мэдээлэл',
    },
    {
      head:'MATERIAL.',
      text:' Олимпиадын жил болгоны материалуудын цугуулга',
    },
    {
      head:'CONTENT.',
      text:' Хичээл бүрийг тайлбарласан онлайн бичлэгүүд',
    },
    {
      head:'TEST.',
      text:' Coming soon...',
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full h-fit h-min-screen md:h-screen bg-[#faf9f6] flex flex-col gap-4 px-8 py-4 items-center justify-start -z-40"
    >
      <header>
        <h1 className="font-normal text-3xl md:text-2xl xl:text-4xl text-[#303030]">
          Төслийн <span className="font-extrabold bg-gradient-to-r from-[#480CA8] to-[#4361EE] bg-clip-text text-transparent">үндсэн</span> бүтэц...
        </h1>
      </header>
      <div className="w-full h-full flex flex-wrap items-center justify-center text-lg text-[#faf9f6]">
        {content.map((text, index) => (
          <motion.div
            key={index}
            className={`${
              index >= content.length - 2 ? 'md:w-1/2' : 'md:w-1/3'
            } w-full h-fit md:h-1/2 flex items-center justify-center p-2`}
            custom={index} // Pass index for dynamic delay
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={boxVariants}
          >
            <div className="w-full h-full  rounded-3xl  flex flex-col items-center justify-end pt-8 pb-8 bg-indigo-500 text-[#faf9f6]">
              <p className="w-[90%]"><span className="font-bold">{text.head}</span>{text.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reasoning;
