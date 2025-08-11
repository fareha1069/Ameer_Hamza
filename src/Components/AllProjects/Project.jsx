import { React } from "react";
import { motion as Motion } from "motion/react";
import ProjectMenu from "./ProjectMenu"
import bg from '../../assets/bg.png'
const Project = () => {
  const TimelineData = [
    {
      title: "2020",
      cardTitle: "Started University",
      cardSubtitle: "PUCIT",
      cardDetailedText: "Began Bachelors in Software Engineering.",
    },
    {
      title: "2022",
      cardTitle: "Internship",
      cardSubtitle: "XYZ Company",
      cardDetailedText: "Worked as a frontend intern for 3 months.",
    },
    {
      title: "2025",
      cardTitle: "Graduation",
      cardSubtitle: "PUCIT",
      cardDetailedText: "Successfully completed my degree.",
    },
    {
      title: "2020",
      cardTitle: "Started University",
      cardSubtitle: "PUCIT",
      cardDetailedText: "Began Bachelors in Software Engineering.",
    },
    {
      title: "2022",
      cardTitle: "Internship",
      cardSubtitle: "XYZ Company",
      cardDetailedText: "Worked as a frontend intern for 3 months.",
    },
    
  ];

  return (
    <div className="flex flex-col h-full justify-center py-12">
      <Motion.h1
        className="title text-5xl md:text-6xl font-bold text-[#092936] text-center tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        // style={{ backgroundImage: `url(${bg})`}}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        PROJECTS
      </Motion.h1>

      <ProjectMenu events={TimelineData}/>
    </div>
  );
};

export default Project;
