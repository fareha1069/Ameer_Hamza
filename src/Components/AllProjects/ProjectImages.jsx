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

const ProjectImages = ({ project }) => {
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
        Lorem ipsum dolor sit amet.
      </Motion.h1>
      <p className="text-center w-[90vw]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        similique temporibus itaque quidem praesentium repudiandae rem, natus
        reiciendis distinctio odio esse nostrum, vel libero dolor ad molestias!
        Animi amet voluptates nostrum qui. Pariatur officia veritatis, omnis
        culpa iusto, voluptatem quas expedita natus labore soluta inventore
        vitae debitis. Dolorum, temporibus id.
      </p>
      <Carousel
        plugins={[plugin.current]}
        className="w-[80vw] items-center py-10"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {project.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-5 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="opacity-90 h-[450px]">
                  <CardContent className="flex flex-col justify-around h-full overflow-y-auto">
                    <img src={item.image} alt={item.text} />
                    <div className="">
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
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default ProjectImages;
