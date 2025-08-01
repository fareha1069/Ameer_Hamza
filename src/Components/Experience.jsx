import React from "react";
import {motion as Motion} from 'motion/react'
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import bg from "../assets/bg.png"; 
import "../Components/Experience.css";

const Experience = ({ experiences = [] }) => {
  return (
    <div
      className="flex flex-col py-12 experience bg-white/5 justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        position : "relative",
        overflow : "hidden"
      }}
    >
      {/* <div className="bg-white/5 "> */}
      <Motion.h1
        className="title text-4xl md:text-5xl lg:text-6xl font-bold text-[#092936] text-center tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:250%_250%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        EXPERIENCE
      </Motion.h1>

      <div>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#f9fafb", color: "#092936" }}
              contentArrowStyle={{ borderRight: "5px solid #f9fafb" }}
              date={exp.date}
              iconStyle={{ background: exp.iconBg, color: "white" }}
              // icon={<BriefcaseIcon className="h-6 w-6" />}
              icon={
                    exp.imageIcon ? (
                      <img
                        src={exp.imageIcon}
                        alt={`${exp.company} logo`}
                        className="h-full w-full object-contain rounded-full p-1"
                      />
                    ) : (
                    <BriefcaseIcon className="h-6 w-6" />
                  )
                }
              >
              <div className="transition-all duration-700 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.title}
                </h3>
                <h4 className="text-md text-gray-500 mb-2">{exp.company}</h4>
                
                <p className=" text-gray-600">{exp.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
