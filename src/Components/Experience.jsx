import React from "react";
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import bg from "../assets/bg.png"; 
import "../Components/Experience.css";

const Experience = ({ experiences = [] }) => {
  return (
    <div
      className="py-12 experience"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position : "relative",
        overflow : "hidden"
      }}
    >
      <div className="bg-white/5 ">
        <h2 className="text-4xl font-semibold text-[#092936] mb-10 text-center">
          Professional Experience
        </h2>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#f9fafb", color: "#092936" }}
              contentArrowStyle={{ borderRight: "5px solid #f9fafb" }}
              date={exp.date}
              // iconStyle={{ background: exp.iconBg, color: "white" }}
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
                
                <p className="text-sm text-gray-600">{exp.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
