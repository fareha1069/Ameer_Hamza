import React from 'react'
import {motion as Motion} from 'motion/react'

const Project = () => {
  return (
    <div className='flex justify-center h-[90vh] py-12'>
    <Motion.h1
        className="title text-4xl md:text-5xl lg:text-6xl font-bold text-[#092936] text-center tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        PROJECTS
      </Motion.h1>


      </div>
  )
}

export default Project