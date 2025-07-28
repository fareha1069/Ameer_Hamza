import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, duration }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.6 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      
      transition={{
        duration: 7,
        type: "spring",
        bounce: 0.9,
        stiffness : 50,
        // ease: 'easeInOut',
        damping: 18
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white border rounded-xl shadow-md p-6 text-center hover:shadow-lg transition opacity-90 "
    >
      <div className="flex justify-center mb-4 ">
        <img src={icon} alt={`${title} icon`} className="h-30 w-30 object-contain" />
      </div>
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
