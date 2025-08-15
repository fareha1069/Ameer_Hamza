import React from "react";
import bg from '../../assets/bg.png';
import { motion as Motion } from "motion/react";
import Stats from "../AllServices/Stats";

const Service = ({title, desc, image, p}) => {
  
  return (
    <div className="flex flex-col items-center mb-20"> 
    <Motion.div
      className="flex flex-wrap w-full items-center justify-center gap-4 relative overflow-hidden py-12 mb-12"
      style={{ backgroundImage: `url(${bg})` }}
      
    >
      <div className="flex flex-col items-center w-[95vw] lg:w-[45vw] justify-evenly items-center">
        <Motion.h1
          className="title text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
          style={{ fontFamily: "Oswald, monospace" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {title}
        </Motion.h1>
        <p className="txt text-xl font-medium lg:w-[40vw]">
          {desc}
        </p>
        <button className="bg-[#08374A] txt text-lg font-medium text-white px-10 py-3 rounded-lg my-4 mx-auto mt-10">Book a call</button>
      </div>

      <div className="w-[90vw] md:w-[60vw] lg:w-[40vw]">
        <Motion.img src={image} alt="3PL" className="w-[90vw]" 
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
      </div>
    </Motion.div>
    <Stats/>
    <div className="flex items-center justify-center">
      <p className="txt text-lg font-medium text-dark p-4 mt-12 w-[95vw]">{p}</p>
    </div>
    </div>
  );
};

export default Service;
