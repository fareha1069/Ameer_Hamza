import React from 'react';
import Pic from '../../assets/pic.png';
// import pics from '../assets/im'
import bg from '../../assets/bg.png';
import { motion as Motion } from 'motion/react';
import { Icon } from '@iconify/react';
import './Intro.css';
import AnimatedBackground from './AnimatedBackground'; // import the new background
// import Servicediv from './Servicediv'

const Intro = () => {
  return (
    <div
      className="intro flex flex-col lg:flex-row items-center justify-around bg-[#648999] relative overflow-hidden "
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Animated Background circles */}
      <AnimatedBackground />

      <div className="pic flex justify-end items-end w-[70vw] md:w-[50vw] lg:w-[40vw] z-10">
        <Motion.img
          src={Pic}
          alt="Hamza Bhai"
          className="image my-[3%] w-[65vw] md:w-[50vw] lg:w-[25vw] self-end pb-[1%] border-b-[3px] border-[#08374A] rounded-[10%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </div>
      {/* <div>{}</div> */}
      <div className="introduce lg:w-[50vw] w-[90vw] z-10 my-3 mt-6">
        <div>
          <p className="txt text-xl font-semibold text-[#CCD8DC] w-[40vw]"></p>
          <p className="name text-3xl md:text-5xl font-semibold text-[#092936]" style={{ fontFamily: "Oswald, monospace" }}>Ameer Hamza</p>
          <Motion.h1
            className="title text-3xl md:text-5xl font-bold leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
            style={{ fontFamily: "Oswald, monospace" }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Supply Chain Strategist
          </Motion.h1>
          <p className="txt text-lg font-medium text-[#CCD8DC] lg:w-[40vw]">
            Strategic Supply Chain Manager with 4+ years of expertise in optimizing end-to-end operations across global markets. Proven track record in enhancing efficiency,
            reducing costs, and delivering data-driven solutions for e-commerce success
          </p>
        </div>
        <Motion.div
          className="flex gap-4 mt-4 mb-7"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <a href="https://wa.me/92305540880" target="_blank" rel="noreferrer" className="flex items-center">
            <Icon icon="logos:whatsapp-icon" width="36" height="36"/>
          </a>
          <a href="https://www.linkedin.com/in/ameer-hamza-ilyas/" target="_blank" rel="noreferrer">
            <Icon icon="logos:linkedin-icon" width="32" height="32" />
          </a>
          <a href="mailto:your@email.com">
            <Icon icon="logos:google-gmail" width="36" height="36" />
          </a>
          <a href="https://www.upwork.com/freelancers/~0176f60b60aa754ea3?viewMode=1" target="_blank" rel="noreferrer" className="flex items-center">
            <Icon icon="simple-icons:upwork" width="32" height="32"className="text-[#08374A]"/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Icon icon="logos:facebook" width="32" height="32" />
          </a>
          <a href="https://www.instagram.com/ameer_hamza_ilyas/" target="_blank" rel="noreferrer">
            <Icon icon="skill-icons:instagram" width="36" height="36" />
          </a>
          
        </Motion.div>
        <button className="bg-[#08374A] txt text-lg font-medium text-white px-10 py-3 rounded-lg my-4 mx-auto">
            Book a call
          </button>
      </div>

    </div>
  );
};

export default Intro;
