import React from 'react';
import { motion } from 'framer-motion';

const circles = [
  {
    size: 100,
    bg: 'rgba(255, 255, 255, 0.07)',
    start: { x: '10vw', y: '20vh' },
    end: { x: '80vw', y: '70vh' },
    duration: 12,
  },
  {
    size: 120,
    bg: 'rgba(255, 255, 255, 0.05)',
    start: { x: '70vw', y: '60vh' },
    end: { x: '20vw', y: '30vh' },
    duration: 15,
  },
  {
    size: 80,
    bg: 'rgba(255, 255, 255, 0.09)',
    start: { x: '30vw', y: '50vh' },
    end: { x: '60vw', y: '20vh' },
    duration: 17,
  },
  {
    size: 90,
    bg: 'rgba(255, 255, 255, 0.06)',
    start: { x: '50vw', y: '80vh' },
    end: { x: '40vw', y: '10vh' },
    duration: 8,
  },
  {
    size: 150,
    bg: 'rgba(255, 255, 255, 0.06)',
    start: { x: '5vw', y: '90vh' },
    end: { x: '70vw', y: '10vh' },
    duration: 10,
  },
  
  {
    size: 150,
    bg: 'rgba(255, 255, 255, 0.06)',
    start: { x: '50vw', y: '5vh' },
    end: { x: '10vw', y: '90vh' },
    duration: 14,
  },
  {
    size: 150,
    bg: 'rgba(255, 255, 255, 0.06)',
    start: { x: '5vw', y: '90vh' },
    end: { x: '70vw', y: '10vh' },
    duration: 20,
  },
];

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.bg,
          }}
          initial={circle.start}
          animate={circle.end}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
