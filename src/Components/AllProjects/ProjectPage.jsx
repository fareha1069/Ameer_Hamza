import React from "react";
import bg from "../../assets/bg.png";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";
import ProjectMenu from "./ProjectMenu";
import image from "../../assets/Projects/Projects2.png";

const ProjectPage = () => {
  const skills = [
    "Demand Forecasting",
    "Demand",
    "3PL Operations",
    "Project Management",
    "Hardwork",
    "Demand Forecasting",
    "Demand",
    "3PL Operations",
  ];
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
    <>
      <Motion.div
        className="flex flex-wrap justify-evenly items-center gap-4 relative overflow-hidden p-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center w-[100vw] lg:w-[45vw] my-7">
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
            PROJECTS
          </Motion.h1>
          <p className="txt text-xl font-medium lg:w-[50vw] mb-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolore
            architecto debitis aut cum temporibus ab dignissimos, odio earum
            iure at quaerat ullam enim atque quam dolorem officiis pariatur
            optio illum commodi vel minus animi numquam. Tempora et sit facilis
            molestiae, quisquam esse error magnam eum corporis repudiandae
            maxime sequi eligendi praesentium reprehenderit rem consequuntur
            ipsam quas voluptatibus, aliquid quasi delectus facere.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills?.map((skill, index) => (
              <Motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-center justify-center w-6 h-6 bg-[#005851] text-white rounded-full shadow-inner group-hover:scale-110 transition-transform duration-200">
                  <Icon icon="lucide:zap" className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-[#092936] font-medium">
                  {skill}
                </span>
              </Motion.div>
            ))}
          </div>
        </div>

        <div className="w-[90vw] md:w-[60vw] lg:w-[40vw]">
          <Motion.img
            src={image}
            alt="Projects"
            className="w-[90vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </Motion.div>

      <div className="flex flex-col justify-center items-center py-10">
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
          Lorem ipsum dolor sit amet.
        </Motion.h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          iure odit quae commodi impedit soluta accusamus quas, fugit
          dignissimos officiis aut delectus autem ducimus, ipsam dolor illum
          nemo. Cumque amet esse sunt eveniet fugiat quibusdam ex accusantium
          doloribus distinctio, nulla dolorum itaque aliquid quam laborum ipsa
          enim laboriosam. Dicta, pariatur.
        </p>
        <ProjectMenu events={TimelineData} />
      </div>

      <Motion.div
        className="flex flex-col justify-center items-center my-15"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 80,
          type: "spring",
          bounce: 0.9,
          stiffness: 50,
          // ease: 'easeInOut',
          damping: 18,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1
          className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-3"
          style={{ fontFamily: "Oswald, monospace" }}
        >
          Idk what to say
        </h1>
        <p className="txt text-xl font-medium">
          Wanna talk? Send me a message...
        </p>
        <button className="bg-[#08374A] txt text-lg font-medium text-white px-10 py-3 rounded-lg my-4 mx-auto">
          Contact me
        </button>
      </Motion.div>
    </>
  );
};

export default ProjectPage;
