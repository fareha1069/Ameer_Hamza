import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion as Motion } from "motion/react";

import { Card, CardContent } from "../../@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../@/components/ui/carousel2";

const ProjectImages = ({ project = [] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <Motion.h1
        className="title text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
       {project.heading}
      </Motion.h1>
        <p className="text-center w-[90vw]">
        {project.desc}
      </p>

      <Carousel
        plugins={[plugin.current]}
        className="w-[80vw] items-center py-10 relative"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {project.items?.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-5 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="opacity-90 h-[450px]">
                  <CardContent className="flex flex-col justify-around h-full overflow-y-auto">
                    <img
                      src={item.image}
                      alt={item.text || `project-${index}`}
                    />
                    <div>
                      <p className="text-sm text-gray-400 text-right">
                        {item.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-5 right-10 flex-row  lg:hidden">
          <CarouselPrevious className="rounded-full shadow-md hover:bg-gray-200 transition" />
          <CarouselNext className="rounded-full shadow-md hover:bg-gray-200 transition" />
        </div>


        {/* Large Screens Controls (side-centered) */}
        <CarouselPrevious
          className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-9 
                      xl:-left-8 rounded-full shadow-sm hover:bg-gray-200 transition"
        />
        <CarouselNext
          className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-4 
                      xl:-right-8 rounded-full shadow-sm hover:bg-gray-200 transition"
        />

      </Carousel>
    </div>
  );
};

export default ProjectImages;
