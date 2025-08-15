import React from "react";
import { motion } from "framer-motion";

const Pagal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.04, boxShadow: "0px 12px 30px rgba(0,0,0,0.15)" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // very smooth curve
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500"
    >
      {/* {image && (
        <div className="w-full h-40 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      )} */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">kjhg</h2>
        <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit saepe quibusdam, aliquam officia, ab impedit voluptates esse quos quo recusandae sunt tempore temporibus vitae quia, laborum a! Neque, autem!</p>
      </div>
    </motion.div>
  );
};

export default Pagal;
