import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ServiceCard = ({ icon, title, description, duration }) => {
  return (
    <motion.div
       initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-row justify-around gap-5 items-center bg-white border rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-opacity"
    >
      <div className="flex justify-center mb-4">
        <img
          src={icon}
          alt={`${title} icon`}
          className="h-30 w-30 object-contain"
          // loading="lazy"
        />
      </div>
      <div className="flex flex-col items-start gap-3">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 text-left">{description}</p>
      <motion.p className="flex items-center space-x-1 text-gray-600 text-center"
                animate={{ y: [0, 2, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
                >
                  Read More
                  <Icon
                    icon="mdi:chevron-double-right"
                    className=" w-5 h-4 mt-1"
                  />
                </motion.p></div>
    </motion.div>
  );
};

export default ServiceCard;
