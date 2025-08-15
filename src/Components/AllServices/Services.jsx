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

const title = ["Seasonal Demand Forecasting", "Procurement Order Management", "Freight and Logistics Operations", "3PL Operations Management", "Amazon Inventory Reimbursements", "Amazon FBA/AWD Inventory Management", "DTC Supply Chain Management"]
const desc = [
  "Predict the sales trends to optimize stock during seasonal fluctuations.",
  "Streamline purchase orders ensuring timely and cost-efficient product sourcing.",
  "Manage shipping routes for fast, reliable, and cost-effective deliveries.",
  "Coordinate third-party logistics for seamless warehousing and fulfillment services.",
  "Recover funds for lost or damaged inventory through Amazon claims.",
  "Track and optimize the Amazon warehouse stock for the maximum sales efficiency.",
  "Oversee direct-to-consumer inventory flow ensuring accurate delivery."
];

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
      <div className="flex flex-col items-center justify-center w-full p-6"
        style={{ backgroundImage: `url(${bg})` }}
      >

        <h1 className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-3"
          style={{ fontFamily: "Oswald, monospace" }}
        >My Expertise</h1>
        <div className="w-[90vw] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
          <ServiceCard icon={pic1} title={title[0]} description={desc[0]} duration={0.2} />
          <ServiceCard icon={pic2} title={title[1]} description={desc[1]} duration={0.3} />
          <ServiceCard icon={pic3} title={title[2]} description={desc[2]} duration={0.4} />
          <ServiceCard icon={pic4} title={title[3]} description={desc[3]} duration={0.5} />
          <ServiceCard icon={pic1} title={title[0]} description={desc[0]} duration={0.6} />
          <ServiceCard icon={pic2} title={title[1]} description={desc[1]} duration={0.7} />
        </div>

      </div>

      <div className="flex flex-col items-center justify-center w-full p-6">
        <h1 className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-3"
          style={{ fontFamily: "Oswald, monospace" }}
        >Why Choose Me?</h1>
        <Stats />
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
        >Ready to Optimize?</h1>
        <p className="txt text-xl font-medium text-center">Reach out and let’s make it happen.</p>
        <button className="bg-[#08374A] txt text-lg font-medium text-white px-10 py-3 rounded-lg my-4 mx-auto">
          Contact me
        </button>
      </Motion.div>
    </div>
  );
};

export default Services;