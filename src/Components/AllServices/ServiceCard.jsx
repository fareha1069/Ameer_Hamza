import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";
const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
      className="bg-white border rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-500 hover:scale-[1.03]"
    >
      <div className="flex justify-center mb-4">
        <motion.img
          src={icon}
          alt={`${title} icon`}
          className="h-20 w-20 object-contain"
          
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
                        Read More
                        <Icon
                          icon="mdi:chevron-double-right"
                          className=" w-5 h-4 mt-1"
                        />
                      </motion.p>
    </motion.div>
  );
};

export default ServiceCard;
