import React from "react";
import { motion } from "framer-motion";

const CircularProgress = ({ percent }) => {
  const radius = 70;
  const stroke = 7;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e0e0e0"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <motion.circle
        stroke="#005851"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumference}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        whileInView={{
          strokeDashoffset: circumference - (percent / 100) * circumference,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }} // amount = kitna dikhna chahiye start hone k liye
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"
        fill="#005851"
        fontWeight="bold"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default CircularProgress;
