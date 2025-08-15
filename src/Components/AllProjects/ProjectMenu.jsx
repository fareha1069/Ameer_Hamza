import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "../../@/components/ui/card";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

export default function ProjectMenu({ events }) {
  const [selected, setSelected] = useState(0);
  const circleRefs = useRef([]);
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const [cardPos, setCardPos] = useState({ left: 0, top: 0 });
  const [isVertical, setIsVertical] = useState(false);

  const [startX, setStartX] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setStartX(containerRef.current.offsetWidth); // parent ka width
    }
  }, []);

  // Detect screen orientation based on width
  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 1024); // Tailwind's `lg` breakpoint is 1024px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update card position when selected or layout changes
  useEffect(() => {
    const selectedCircle = circleRefs.current[selected];
    const card = cardRef.current;
    const container = containerRef.current;

    if (selectedCircle && card && container) {
      const circleRect = selectedCircle.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (isVertical) {
        const relativeTop = circleRect.top - containerRect.top;

        setCardPos({
          left: 0,
          top: relativeTop,
        });
      } else {
        const circleCenterX = circleRect.left + circleRect.width / 2;
        const relativeX = circleCenterX - containerRect.left;

        setCardPos({
          left: relativeX,
          top: 0,
        });
      }
    }
  }, [selected, isVertical]);

  return (
    <div className="flex justify-center items-start w-full h-[110vh] md:h-[125vh] lg:h-auto">
      <div
        ref={containerRef}
        className="flex flex-row lg:flex-col lg:items-center w-[90vw] lg:justify-center gap-x-3 md:gap-x-5"
      >
        {/* Circles */}
        <div className="flex flex-col lg:flex-row mt-10 mb-5 items-center justify-center ">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center "
            >
              {index !== 0 && (
                <div className="border-r-3 lg:border-r-0 lg:border-b-3 border-[#648999] h-[50px] lg:h-0 lg:w-[50px] xl:w-[70px] w-0"></div>
              )}
              <div
                ref={(el) => (circleRefs.current[index] = el)}
                className={`w-9 h-9 md:w-10 md:h-10 xl:w-14 xl:h-14 text-xl rounded-full flex items-center justify-center text-white font-bold z-10 cursor-pointer transition-all duration-300 ${
                  selected === index ? "bg-[#08374A] scale-110" : "bg-[#648999]"
                }`}
                onClick={() => setSelected(index)}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Card */}
        <div className="relative h-[50vh] w-full">
          <motion.div
            initial={{ x: startX, opacity: 0 }}
            whileInView={{
              x: cardPos.left,
              y: cardPos.top,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.5 }} // 0.2 = 20% visible hone pe trigger
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Card
              ref={cardRef}
              className="bg-white h-[50vh] w-[75vw] lg:w-[25vw] shadow-lg mb-10"
            >
              <CardContent className="flex flex-col justify-around h-full overflow-y-auto px-4">
                <h3 className="text-lg font-semibold">
                  {events[selected].title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {events[selected].text}
                </p>
                <motion.div
                  animate={{ y: [0, 2, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <a
                    href={events[selected].slug}
                    className="flex items-center space-x-1 text-gray-600 ml-auto"
                  >
                    Read More
                    <Icon
                      icon="mdi:chevron-double-right"
                      className="w-5 h-4 mt-1"
                    />
                  </a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}