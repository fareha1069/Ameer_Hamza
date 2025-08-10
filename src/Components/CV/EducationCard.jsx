import React from "react";
import { motion } from "framer-motion";
import { MdSchool, MdStar, MdMenuBook } from "react-icons/md";
import CircularProgress from "./CircularProgress";

const textVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const EducationCard = ({ education = {} }) => {
  const { icon, institute, degree, field, grade, duration, percent } = education;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center bg-[#E8F0F2] p-8 rounded-xl shadow-lg"
    >
      {/* Logo */}
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-10 w-24 h-24 rounded-full overflow-hidden bg-white order border-gray-200 flex items-center justify-center shadow-md">
        {icon ? (
          <img
            src={icon}
            alt={`${institute} logo`}
            className="object-contain w-16 h-16 rounded-full"
          />
        ) : (
          <div className="text-indigo-700 text-5xl">🎓</div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 text-left space-y-2">
        <motion.h3
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold text-gray-900"
        >
          {institute}
        </motion.h3>

        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          transition={
            {repeat: Infinity}
          }
          viewport={{ once: true }}
          className="text-md lg:text-xl text-gray-700 font-medium flex items-start gap-2"
        >
          <MdSchool className="text-[#005851] flex-shrink-0 mt-1" />
          <span className="whitespace-normal break-words">{degree}</span>
        </motion.p>

        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-gray-600 flex items-start gap-2"
        >
          <MdMenuBook className="text-[#005851] flex-shrink-0 mt-1" />
          <span className="whitespace-normal break-words">{field}</span>
        </motion.p>

        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-md md:text-xl text-gray-700 font-medium flex items-start gap-2"
        >
          <MdStar className="text-[#005851] flex-shrink-0 mt-1" />
          <span className="whitespace-normal break-words">{grade}</span>
        </motion.p>
      </div>

      {/* Circular Progress */}
      <div className="mt-6 md:mt-0 md:ml-12 flex flex-col items-center w-24">
        <div className="w-35 h-30 flex items-center justify-center">
          <CircularProgress percent={percent} />
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
