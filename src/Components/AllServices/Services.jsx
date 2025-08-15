import React from "react";
import bg from "../../assets/bg.png";
import PL from "../../assets/PL.png";
import ServiceCard from "./ServiceCard";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";

import pic1 from '../../assets/logo1.png'
import pic2 from '../../assets/logo2.png'
import pic3 from '../../assets/logo3.png'
import pic4 from '../../assets/logo4.png'
import Stats from "./Stats";


const title = [" Project Management", "3PL Operations Management" , "Amazon Seller Policy Conformance " , "Vendor Management"]
const desc = [
  "Planning, executing, and overseeing projects to meet goals on time",
  "Efficient coordination and optimization of third-party logistics services",
  "Ensuring adherence to Amazon’s marketplace policies to maintain",
  "Streamlining the process of selecting, onboarding, managing vendors"
];

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      <Motion.div
        className="flex flex-wrap justify-evenly items-center gap-4 relative overflow-hidden py-12 w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center w-[90vw]">
          <Motion.h1
            className="title text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
            style={{ fontFamily: "Oswald, monospace" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Services
          </Motion.h1>
          <p className="txt text-xl font-medium lg:w-[80vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            ex placeat perferendis nulla possimus repellendus nemo illo
            reprehenderit sequi esse inventore eaque dolore sed, qui quae
            voluptates asperiores? Cupiditate aspernatur corrupti quia quisquam
            at ex dolorem odit nisi sit neque odio mollitia, ea hic numquam
            impedit perferendis cumque similique ab saepe necessitatibus
            consequuntur magni non itaque assumenda. Labore impedit sint
            provident illo, laboriosam velit nisi! Distinctio quasi pariatur
            cumque dicta iste quas libero nam magnam quo provident dignissimos
            omnis hic assumenda, nobis voluptas laborum minus corporis. Quaerat
            voluptatem corporis, fugiat ratione tempora dicta natus voluptatum,
            dolorem unde fugit aspernatur porro? Labore impedit sint provident
            illo, laboriosam velit nisi! Distinctio quasi pariatur cumque dicta
            iste quas libero nam magnam quo provident dignissimos omnis hic
            assumenda, nobis voluptas laborum minus corporis. Quaerat voluptatem
            corporis, fugiat ratione tempora dicta natus voluptatum, dolorem
            unde fugit aspernatur porro?
          </p>
          <button className="bg-[#08374A] txt text-lg font-medium text-white px-10 py-3 rounded-lg my-4 mx-auto">
            Book a call
          </button>

          <Motion.p
            className="flex items-center space-x-1 text-gray-600"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Explore More
            <Icon icon="mdi:chevron-double-down" className=" w-5 h-4 mt-1" />
          </Motion.p>
        </div>
      </Motion.div>

      <Motion.div className="flex flex-col lg:flex-row justify-around items-center my-12"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 80,
        type: "spring",
        bounce: 0.9,
        stiffness: 50,
        // ease: 'easeInOut',
        damping: 18,
      }}
      viewport={{ once: true, amount: 0.3 }}>
      <div className="w-[90vw] lg:w-[45vw] flex flex-col text-lg">
        <h1 className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-3"
            style={{ fontFamily: "Oswald, monospace" }}
            
            >Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          tempora fuga aliquam perferendis, eum soluta esse assumenda id
          molestiae velit est nemo exercitationem possimus, ipsam laboriosam
          beatae
        </p>
        <div className="my-4">
          {desc.map((item, index) => (
            <p key={index}><Icon icon="lucide:globe" className="mr-3 inline text-gray-700"/>{item}</p>
          ))}
        </div>
      </div>
      <img src={PL} alt="Services" className="w-[90vw] lg:w-[40vw]"/>
      </Motion.div>
        <div className="flex flex-col items-center justify-center w-full p-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
          <h1 className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-3"
            style={{ fontFamily: "Oswald, monospace" }}
            >My Expertise</h1>
        <div className="w-[80vw] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 m-5 place-items-center">
        <ServiceCard icon={pic1} title={title[0]} description={desc[0]} duration  = {0.2} />
        <ServiceCard icon={pic2} title={title[1]} description={desc[1]} duration  = {0.3} />
        <ServiceCard icon={pic3} title={title[2]} description={desc[2]} duration  = {0.4} />
        <ServiceCard icon={pic4} title={title[3]} description={desc[3]} duration  = {0.5} />
        <ServiceCard icon={pic1} title={title[0]} description={desc[0]} duration  = {0.6} />
        <ServiceCard icon={pic2} title={title[1]} description={desc[1]} duration  = {0.7} />
      </div>
      
      </div>

      <div className="flex flex-col items-center justify-center w-full p-6">
          <h1 className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-3"
            style={{ fontFamily: "Oswald, monospace" }}
            >Why Choose Me?</h1>
            <Stats/>
      </div>

      <Motion.div className="flex flex-col justify-center my-15"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 80,
        type: "spring",
        bounce: 0.9,
        stiffness: 50,
        // ease: 'easeInOut',
        damping: 18,
      }}
      viewport={{ once: true, amount: 0.3 }}>
        <h1 className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-3"
            style={{ fontFamily: "Oswald, monospace" }}
            >Idk what to say</h1>
        <p className="txt text-xl font-medium">Wanna talk? Send me a message...</p>
        <button className="bg-[#08374A] txt text-lg font-medium text-white px-10 py-3 rounded-lg my-4 mx-auto">
            Contact me
          </button>
      </Motion.div>
    </div>
  );
};

export default Services;