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
} from "../../@/components/ui/carousel";

const ProjectImages = ({ project = [] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="flex flex-col justify-center items-center pt-10 lg:w-[45vw]">
      <Carousel
        plugins={[plugin.current]}
        className="w-[90vw] md:w-[75vw] lg:w-[40vw]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {project.items?.map((item, index) => (
            <CarouselItem
              key={index}
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
        <div className="flex flex-row gap-2 justify-end mt-1">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectImages;
