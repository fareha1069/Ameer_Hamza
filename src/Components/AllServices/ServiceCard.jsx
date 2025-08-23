import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";
const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
      className="bg-white border rounded-xl shadow-md p-6 text-center 
          hover:shadow-xl transition-all duration-500 hover:scale-[1.03] 
          w-full sm:w-[90%] md:w-[90%] lg:w-[28vw] min-h-[40vh]"

    >
      <div className="flex justify-center mb-4">
        <motion.img
          src={icon}
          alt={`${title} icon`}
          className="h-25 w-25 object-contain"
        />
        
      </div>
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <motion.p className="flex items-center justify-center space-x-1 text-gray-600 text-center"
        animate={{ y: [0, 2, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <a href={link} className="flex items-center gap-1 hover:underline">
          <span>Read More</span>
          <Icon
            icon="mdi:chevron-double-right"
            className="w-5 h-5"
          />
        </a>

      </motion.p>
    </motion.div>
  );
};

export default ServiceCard;
