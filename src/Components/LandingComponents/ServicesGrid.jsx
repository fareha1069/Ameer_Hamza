import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard.jsx";
import pic1 from "../../assets/logo1.png";
import pic2 from "../../assets/logo2.png";
import pic3 from "../../assets/logo3.png";
import pic4 from "../../assets/logo4.png";

const title = [
  "Seasonal Demand Forecasting",
  "Procurement Order Management",
  "Freight and Logistics Operations",
  "3PL Operations Management",
  "Amazon Inventory Reimbursements",
  "Amazon FBA/AWD Inventory Management"
];

const desc = [
  "Predict the sales trends to optimize stock during seasonal fluctuations.",
  "Streamline purchase orders ensuring timely and cost-efficient product sourcing.",
  "Manage shipping routes for fast, reliable, and cost-effective deliveries.",
  "Coordinate third-party logistics for seamless warehousing and fulfillment services.",
  "Recover funds for lost or damaged inventory through Amazon claims.",
  "Track and optimize the Amazon warehouse stock for the maximum sales efficiency."
];

const pics = [pic1, pic2, pic3, pic4, pic1, pic2];

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0.1 },
  visible: (i = 0) => ({
    opacity: 2,
    transition: {
      staggerChildren: 0.12,
      delayChildren: i * 0.1, // Row-wise delay
    }
  })
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ServicesGrid() {
  // Split into rows of 3 for row-wise delay
  const rows = [];
  for (let i = 0; i < pics.length; i += 3) {
    rows.push(pics.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col gap-8 m-5">
      {rows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 place-items-center"
          variants={containerVariants}
          custom={rowIndex} // Pass row index for delay
          initial="hidden"
          whileInView="visible"
        //   viewport={{ once: true, amount: 0.2 }}
        >
          {row.map((icon, index) => {
            const cardIndex = rowIndex * 3 + index;
            return (
              <motion.div key={cardIndex} variants={cardVariants}>
                <ServiceCard
                  icon={icon}
                  title={title[cardIndex]}
                  description={desc[cardIndex]}
                />
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}
