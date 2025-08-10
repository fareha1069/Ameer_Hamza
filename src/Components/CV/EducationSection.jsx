import React from 'react';
import pu from '../../assets/CVLogo/pu.jpg';
import pgc from '../../assets/CVLogo/pgc.jpg';
import EducationCard from './EducationCard';
import {motion as Motion, percent} from 'motion/react'
const educationData = [
  {
    icon: pu,
    institute: "University of the Punjab",
    degree: "Bachelor of Applied Science - BASc",
    field: "Criminalistics and Criminal Science",
    grade: "A+ (3.83/4.0)",
    duration: "Dec 2020 - Dec 2024",
    position: "2nd Position",
    award: "Silver Medal",
    percent : "95"
  },
  {
    icon: pgc,
    institute: "Punjab Group Of Colleges",
    degree: "Intermediate",
    field: "Business Administration and Management, General",
    grade: "A+ (994/1100)",
    duration: "Jan 2018 - Jan 2020",
    percent : "91"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="flex flex-col w-[95%] lg:w-[75%] items-center justify-center">
      <Motion.h1
        className="title text-4xl md:text-5xl lg:text-6xl font-bold text-[#092936]  tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Education
      </Motion.h1>
      <div className="space-y-6 w-full">
        {educationData.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
