import React from 'react';
import Pic from '../assets/pic.png';
// import pics from '../assets/im'
import bg from '../assets/bg.png';
import { motion as Motion } from 'motion/react';
import { Icon } from '@iconify/react';
import './Intro.css';
import AnimatedBackground from './AnimatedBackground'; // import the new background

const Intro = () => {
  return (
    <div
      className="intro flex flex-col lg:flex-row items-center  justify-around bg-[#648999] relative overflow-hidden "
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Animated Background circles */}
      <AnimatedBackground />

      <div className="pic flex justify-end items-end w-[75vw] md:w-[60vw] lg:w-[35vw] z-10">
        <Motion.img
          src={Pic}
          alt="Hamza Bhai"
          className="image my-[3%] pb-[1%] border-b-[3px] border-[#08374A] rounded-[10%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </div>
    {/* <div>{}</div> */}
      <div className="introduce lg:w-[50vw] w-[90vw] z-10">
        <div>
          <p className="txt text-xl font-semibold text-[#CCD8DC] w-[40vw]">Hello I'm</p>
          <p className="name text-4xl font-semibold text-[#092936]">Ameer Hamza</p>
          <Motion.h1
            className="title text-4xl lg:text-5xl font-bold leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Supply Chain Strategist
          </Motion.h1>
          <p className="txt text-xl font-medium text-[#CCD8DC] lg:w-[40vw]">
            Strategic Supply Chain Manager with 4+ years of experience driving operational efficiency Strategic Supply Chain Manager with 4+ years of experience driving operational efficiency
          </p>
        </div>
        <Motion.div
          className="flex gap-4 mt-4"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Icon icon="logos:facebook" width="32" height="32" />
          </a>
          <a href="https://www.instagram.com/ameer_hamza_ilyas/" target="_blank" rel="noreferrer">
            <Icon icon="skill-icons:instagram" width="36" height="36" />
          </a>
          <a href="mailto:your@email.com">
            <Icon icon="logos:google-gmail" width="36" height="36" />
          </a>
          <a href="https://www.linkedin.com/in/ameer-hamza-ilyas/" target="_blank" rel="noreferrer">
            <Icon icon="logos:linkedin-icon" width="32" height="32" />
          </a>
        </Motion.div>
      </div>
    </div>
  );
};

export default Intro;
