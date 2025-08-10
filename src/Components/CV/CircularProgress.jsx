import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const CircularProgress = ({ percent }) => {
  const radius = 70;        // Increased radius from 30 to 50 (bigger circle)
  const stroke = 7;         // Increased stroke thickness from 5 to 8
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      strokeDashoffset: circumference - (percent / 100) * circumference,
      transition: { duration: 1.5, ease: "easeOut" },
    });
  }, [percent, circumference, controls]);

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
        animate={controls}
        initial={{ strokeDashoffset: circumference }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"              // Bigger font size for bigger circle
        fill="#005851"
        fontWeight="bold"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default CircularProgress;
