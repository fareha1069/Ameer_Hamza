import * as React from "react"
import {motion as Motion} from 'motion/react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../@/components/ui/carousel"

export default function CarouselSize() {
  return (
    <div className="flex flex-col justify-center items-center">
    <Carousel className="flex flex-col justify-center items-center w-[70vw] h-xl ml-[100px]">
      <Motion.h1
            className="title text-4xl lg:text-5xl font-bold leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Recommendations
          </Motion.h1>
      <CarouselContent className="flex justify-center items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex flex-col items-center justify-center">
              <h3 className="text-[2.5rem] font-semibold text-[#092936]">Michael Uncle</h3>
              {/* <p>bal ssbdq duiewh ewkfbd vjdeife vrjeif efbureu dnkfie  nrei dier cjkdefi enrov d 9ref den fduje djew jd dj edfi de djc dejcjdfied  djvre fienf iebf ejfjie fkewbfewonefued viecerif eriufh edor fiur eif reu rhr</p> */}
            <p>Ameer is a highly skilled and dedicated professional who consistently delivers outstanding results. His ability to problem solve, budget management and decision making sets him apart, making him an invaluable asset to any team. I had the pleasure of working with Mr. Hamza as he managed my Amazon Supply Chain for Kanebilt, and have always been impressed by the work ethic, creativity and leadership. I highly recommend Ameer to anyone looking for a talented and reliable manager to oversee there Amazon Supply Chain.</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
