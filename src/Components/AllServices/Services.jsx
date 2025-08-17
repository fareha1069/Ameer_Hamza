import React from "react";
import bg from "../../assets/Intro/bg.png";
import PL from "../../assets/Services/Service.png";
import ServiceCard from "./ServiceCard";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";

import pic1 from '../../assets//Services/logo1.png'
import pic2 from '../../assets/Services/logo2.png'
import pic3 from '../../assets/Services/logo3.png'
import pic4 from '../../assets/Services/logo4.png'
import pic5 from '../../assets/Services/logo5.png'
import pic6 from '../../assets/Services/logo6.png'
import Stats from "./Stats";
import Contactdiv from "../../Components/LandingComponents/Contact";
import LandingServices from "./LandingServices";

const desc = [
  "Predict the sales trends to optimize stock during seasonal fluctuations.",
  "Streamline purchase orders ensuring timely and cost-efficient product sourcing.",
  "Manage shipping routes for fast, reliable, and cost-effective deliveries.",
  "Coordinate third-party logistics for seamless warehousing and fulfillment services.",
  "Recover funds for lost or damaged inventory through Amazon claims.",
  "Track and optimize the Amazon warehouse stock for the maximum sales efficiency.",
  "Oversee direct-to-consumer inventory flow ensuring accurate delivery."
];
const title = "My Expertise"
const intro = "With over 4 years of hands-on experience in global supply chain management, I specialize in optimizing Amazon FBA, AWD, and DTC operations across multiple international markets. I design and implement advanced seasonal demand forecasting tools to ensure accurate inventory planning for peak events like Prime Day and Black Friday. My expertise includes ERP system enhancements, 3PL onboarding, and process automation to reduce costs and eliminate inefficiencies. I excel at supplier negotiation, purchase order management, and freight coordination to achieve on-time deliveries and optimal storage utilization. Skilled in inventory reconciliation, I have successfully recovered over $200,000 in lost or damaged goods through strategic claims management. I have consistently improved Amazon IPI scores, driving operational efficiency and account health. My track record includes launching 20+ products, managing cross-functional teams, and delivering actionable data insights to leadership. From procurement strategy to logistics execution, I offer end-to-end supply chain solutions tailored to business growth. Whether scaling established brands or launching new products, I ensure seamless operations that save time, cut costs, and boost profitability."

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
          <p className="text-base md:text-xl lg:w-[80vw]">
            {intro}
          </p>

          <LandingServices title = {title}/>

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
          <h1 className="title text-2xl md:text-4xl xl:text-5xl font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-3"
            style={{ fontFamily: "Oswald, monospace" }}

          >Strategic E-Commerce Supply Chain Services</h1>
          <p className="text-base md:text-xl">
            Comprehensive solutions from forecasting to fulfillment, tailored for Amazon, Shopify, and global markets.
            Driving efficiency, reducing costs, and optimizing operations for sustained business growth.
          </p>
          <div className="my-6 space-y-3">
            {desc.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <Icon
                  icon="lucide:globe"
                  className="text-base w-5 h-5 flex-shrink-0 mt-1"
                />
                <p className="text-base md:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img src={PL} alt="Services" className="w-[90vw] lg:w-[40vw]" />
      </Motion.div>
     
      <div className="flex flex-col items-center justify-center w-full p-6">
        <h1 className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-3"
          style={{ fontFamily: "Oswald, monospace" }}
        >Why Choose Me?</h1>
        <Stats />
      </div>
      <Contactdiv/>
    </div>
  );
};

export default Services;