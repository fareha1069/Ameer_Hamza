import React from "react";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";
import bg from "../../assets/bg.png";
import ProjectImages from "./ProjectImages";
import img from '../../assets/Projects/Projects.png'
import Contact from "../../Components/LandingComponents/Contact";

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
const responsibilities = [
  "Demand Forecasting lorem ipum sit dul",
  "Demand",
  "3PL Operations",
  "Project Management",
  "Hardwork",
  "Demand Forecasting",
  "Demand",
  "3PL Operations",
];

const project = [
    {
        text: "This score reflects my year-long effort with \"The Ridge\"",
        image: img
    },
    {
        text: "This score reflects my year-long effort with \"The Ridge\"",
        image: img
    },
    {
        text: "This score reflects my year-long effort with \"The Ridge\"",
        image: img
    },
    {
        text: "This score reflects my year-long effort with \"The Ridge\"",
        image: img
    },
    {
        text: "This score reflects my year-long effort with \"The Ridge\"",
        image: img
    },
    {
        text: "This score reflects my year-long effort with \"The Ridge\"",
        image: img
    },
]

const ProjectPage = () => {
  return (
    <div>
      <Motion.div
        className="flex items-center justify-center overflow-hidden p-4 pt-5 pb-5 md:p-10 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}

        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col md:flex-row gap-10 w-[90vw]">
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Title */}

            <Motion.h1
              className="title text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
              style={{ fontFamily: "Oswald, monospace" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              title
            </Motion.h1>
            <p className="text-[#092936] text-base md:text-lg leading-relaxed">
              short desc Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Excepturi, ad. Cum cupiditate voluptas ratione explicabo,
              iusto rem. Cum vel recusandae ducimus. Perspiciatis labore fugit
              aperiam voluptates, officia numquam quaerat, voluptas maiores
              perferendis animi suscipit sit quidem tempora itaque nam veritatis
              quae quas ut. Esse inventore delectus asperiores reprehenderit,
              possimus nesciunt?
            </p>

            <div className="w-full">
              <h3 className="text-lg font-semibold text-[#092936] mb-3">
                Top Skills
              </h3>
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
          </div>

          {/* Right Side */}
          <div className="md:w-2/3 w-full space-y-8">
            
            {/* Responsibilities */}
            <div>
              <h3 className="text-xl font-semibold text-[#092936] mb-6">
                Key Responsibilities
              </h3>
              <div className="relative border-l-2 border-dashed border-[#005851] ml-3 space-y-6">
                {responsibilities?.map((item, idx) => (
                  <Motion.div
                    key={idx}
                    className="relative pl-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <span className="absolute -left-3 top-1 w-4 h-4 rounded-full bg-[#005851] shadow-md border-2 border-white"></span>
                    <div className="flex items-start gap-3">
                      <Icon
                        icon="lucide:check-circle"
                        className="w-5 h-5 mt-0.5 text-[#005851] flex-shrink-0"
                      />
                      <p className="text-[#092936] text-base leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Motion.div>

        <ProjectImages project={project} />

     <Contact/>
    </div>
  );
};
export default ProjectPage;
