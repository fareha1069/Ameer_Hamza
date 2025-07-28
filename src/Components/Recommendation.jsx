"use client";

import bg from "../assets/bg.png";
import { motion as Motion } from "motion/react";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from ".././@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from ".././@/components/ui/carousel";

const Recommendation = ({ recommend = [] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Motion.div
      className="flex flex-wrap justify-evenly items-center gap-4 bg-[#648999] relative overflow-hidden py-12"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ opacity: 0, y: 150, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 80,
        type: "spring",
        bounce: 0.9,
        stiffness: 50,
        // ease: 'easeInOut',
        damping: 18,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Motion.h1
        className="title text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold text-[#092936] w-[100vw] lg:w-[45vw] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        TESTIMONIALS
      </Motion.h1>

      <div className="w-[90vw] md:w-[60vw] lg:w-[40vw]">
        <Carousel
          plugins={[plugin.current]}
          className="w-[90vw] md:w-[60vw] lg:w-[40vw]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {recommend.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-white h-[400px]">
                    <CardContent className="flex flex-col justify-around h-full overflow-y-auto">
                      <p className="text-gray-600 text-sm md:text-base">{item.text}</p>
                      <div className="">
                        <p className="italic text-right">~{item.name}</p>
                        <p className="text-sm text-gray-400 text-right">
                          {item.date}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex flex-row gap-2 justify-end mt-1">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </Motion.div>
  );
};

export default Recommendation;
