import React from 'react'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '../../@/components/ui/carouselbrands.jsx'
import {motion as Motion} from 'motion/react'

import pic1 from '../../assets/trustedby/Ridge.png'
import pic2 from '../../assets/trustedby/FEActive.png'
import pic3 from '../../assets/trustedby/FullCircle.png'
import pic4 from '../../assets/trustedby/Earthiest.png'
import pic5 from '../../assets/trustedby/HayvenHurst2.png'
import pic6 from '../../assets/trustedby/manifest.png'
import pic7 from '../../assets/trustedby/HikerHungers.png'
import pic8 from '../../assets/trustedby/UprootClean1.png'

const TrustedBy = () => {
  return (
    <div className='flex flex-wrap justify-evenly items-center gap-4 md:bg-[#648999] relative overflow-hidden mt-15  mb-10 '>
        <Motion.h1
        className="title text-4xl md:text-5xl lg:text-6xl text-center font-bold text-[#092936] w-[100vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        TRUSTED BY
      </Motion.h1>

      <div className="w-[100vw] md:w-[55vw] lg:w-[65vw] xl:w-[70vw] bg-[#648999]">
      <Carousel className="">
    <CarouselContent className="flex items-center gap-x-2">
    <CarouselItem><img src={pic1} alt='Ridge'/></CarouselItem>
    <CarouselItem><img src={pic2} alt='FEActive'/></CarouselItem>
    <CarouselItem><img src={pic3} alt='FullCircle'/></CarouselItem>
    <CarouselItem><img src={pic4} alt='Earthiest'/></CarouselItem>
    <CarouselItem><img src={pic6} alt='Manifest'/></CarouselItem>
    <CarouselItem><img src={pic5} alt='HavyenHurst'/></CarouselItem>
    <CarouselItem><img src={pic7} alt='HikerHungers'/></CarouselItem>
    <CarouselItem><img src={pic8} alt='UprootClean'/></CarouselItem>
  </CarouselContent>
</Carousel></div>
    </div>
  )
}

export default TrustedBy
