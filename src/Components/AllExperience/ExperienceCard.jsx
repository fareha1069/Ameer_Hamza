import React from "react";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";
import bg from '../../assets/bg.png'
const ExperienceCard = ({ experience = {} }) => {
  return (
    // <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-xl p-6 md:p-10 bg-white transition-shadow hover:shadow-2xl duration-300">
    <Motion.div
      className="max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] mb-9 mr-2 ml-2 p-4 pt-5 pb-5 md:p-10 md:mr-5 md:ml-5 bg-[#D6DFE2] transition-shadow hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}

      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className="flex flex-col md:flex-row gap-10">
      
        <div className="md:w-1/3 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        
          <Motion.div
            className="w-24 h-24 rounded-2xl bg-[#f9fafb] shadow-inner border flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={experience.companyLogo}
              alt="Company Logo"
              className="w-20 h-20 object-contain rounded-md transition-transform duration-300 group-hover:scale-110"
            />
          </Motion.div>
          <div>
            <p className="text-xl font-semibold text-[#092936]">{experience.company}</p>
            <p className="text-md font-medium text-gray-800 mt-1">
              {experience.title}
            </p>
            <p className="text-sm text-gray-600">{experience.duration}</p>
            <p className="text-sm text-gray-600">{experience.location}</p>
          </div>

       
          <div className="w-full">

            <h3 className="text-lg font-semibold text-[#092936] mb-3">Top Skills</h3>
            <div className="flex flex-wrap gap-3">
              {experience.skills?.map((skill, index) => (
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
                  <span className="text-sm text-[#092936] font-medium">{skill}</span>
                </Motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="md:w-2/3 w-full space-y-8">
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
            {experience.title}
          </Motion.h1>
          <p className="text-[#092936] text-base md:text-lg leading-relaxed">
            {experience.shortDescription}
          </p>

          {/* Responsibilities */}
          <div>
            <h3 className="text-xl font-semibold text-[#092936] mb-6">Key Responsibilities</h3>
            <div className="relative border-l-2 border-dashed border-[#005851] ml-3 space-y-6">
              {experience.responsibilities?.map((item, idx) => (
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
                      {item.text}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Motion.div>
  );
};
export default ExperienceCard;
