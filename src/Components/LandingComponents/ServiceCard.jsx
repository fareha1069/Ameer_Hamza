import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, duration }) => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 15, scale: 0.9 }}
      whileInView={{ opacity: 0.9, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        bounce: 0.2,
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
