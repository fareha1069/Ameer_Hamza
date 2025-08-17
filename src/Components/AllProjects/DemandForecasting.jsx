import React from "react";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";
import bg from "../../assets/Intro/bg.png";
import ProjectImages from "./ProjectImages";
import img1 from "../../assets/Projects/Demand/img1.png";
import img2 from "../../assets/Projects/Demand/img2.png";
import img3 from "../../assets/Projects/Demand/img3.png";
import img4 from "../../assets/Projects/Demand/img4.png";
import img5 from "../../assets/Projects/Demand/img5.png";
import img6 from "../../assets/Projects/Demand/img6.png";
import img7 from "../../assets/Projects/Demand/img7.png";
import img8 from "../../assets/Projects/Demand/img8.png";
import img9 from "../../assets/Projects/Demand/img9.png";
import img10 from "../../assets/Projects/Demand/img10.png";

const skills = [
  "Demand Planning",
  "Forecasting",
  "Procurement",
  "Supply Chain Management",
  "Amazon FBA",
  "Inventory Management",
  "Ecommerce",
  "Supply Chain & Logistics",
  "Warehouse Management"
];

const responsibilities = [
  "Develop and maintain accurate demand forecasts by analyzing historical sales data, market trends, and customer insights to support production, sales, and inventory planning.",
  "Manage end-to-end procurement processes, including supplier identification, vendor negotiations, purchase order management, and cost optimization initiatives.",
  "Oversee complete supply chain management operations, ensuring seamless coordination between procurement, production, warehousing, and distribution teams to achieve efficiency and reduce costs.",
  "Handle Amazon FBA operations by managing inbound shipments, monitoring inventory levels, planning stock replenishments, and optimizing fulfillment performance.",
  "Implement effective inventory management strategies to minimize stockouts, reduce excess inventory, and improve overall working capital utilization.",
  "Supervise supply chain and logistics operations, including freight forwarding, 3PL partnerships, and last-mile delivery, to ensure timely and cost-efficient distribution.",
  "Develop and enforce warehouse management practices focusing on inventory accuracy, space utilization, workforce efficiency, and order fulfillment speed."
];

const project = {
  heading: "Demand Forecasting & Inventory Planning Insights",
  desc: "Below are some of the key performance highlights and scores achieved through accurate forecasting, demand planning, and supply chain optimization. Each score reflects real challenges, strategies, and outcomes across different brands.",
  items: [
    {
      text: 'This score reflects my year-long effort with "The Ridge"',
      image: img1,
    },
    {
      text: '"Hexclad" UK Graph',
      image: img2,
    },
    {
      text: '"Hexclad" US Graph',
      image: img3,
    },
    {
      text: 'This score of "Vet Naturals" was challenging due to perishable goods.',
      image: img4,
    },
    {
      text: 'This score reflects my year-long effort with "Hayvenhurst"',
      image: img5,
    },
    {
      text: "Brand's OOS Issue really Improved with My Projections",
      image: img6,
    },
    {
      text: 'New brand "KANEBILT" with impressive in-stock rate.',
      image: img7,
    },
    {
      text: "Despite high supplier MOQs, achieved this score for the brand.",
      image: img8,
    },
    {
      text: 'This score of "Supplant" was challenging due to perishable goods.',
      image: img9,
    },
    {
      text: 'IPI Score of "Beared brand"',
      image: img10,
    },
  ],
};

const DemandForecasting = () => {
  return (
    <div>
      <Motion.div
        className="flex items-center justify-center overflow-hidden p-4 pt-5 pb-5 md:p-10 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col md:flex-row gap-10 w-[90vw]">
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Title */}

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
              Demand Forecasting
            </Motion.h1>
            <p className="text-[#092936] text-base leading-relaxed">
              With a strong track record, I excel in demand planning and
              forecasting for FBA brands, successfully managing 20+ brands to
              date. My proficiency lies in demand planning and inventory
              forecasting through efficient projection models, ensuring optimal
              stock levels and minimizing excess inventory. Collaborating
              closely with suppliers, I project inventory for FBA replenishments
              and production orders, and for some brands, I manage inventory
              replenishment directly from China. These efforts result in
              impressive IPI scores and in-stock metrics for the brands under my
              management. My expertise in supply chain optimization is evident
              through tangible results and operational efficiency, significantly
              contributing to the success and growth of the brands I work with.
            </p>

            <div className="w-full">
              <h3 className="text-lg font-semibold text-[#092936] mb-3">
                Top Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills?.map((skill, index) => (
                  <Motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                     viewport={{once:true}}
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-[#005851] text-white rounded-full shadow-inner group-hover:scale-110 transition-transform duration-200">
                      <Icon icon="lucide:zap" className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#092936] font-medium">
                      {skill}
                    </span>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-2/3 w-full space-y-8">
            {/* Responsibilities */}
            <div>
              <h3 className="text-xl font-semibold text-[#092936] mb-6">
                Key Responsibilities
              </h3>
              <div className="relative border-l-2 border-dashed border-[#005851] ml-3 space-y-6">
                {responsibilities?.map((item, idx) => (
                  <Motion.div
                    key={idx}
                    className="relative pl-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                     viewport={{once:true}}
                  >
                    <span className="absolute -left-3 top-1 w-4 h-4 rounded-full bg-[#005851] shadow-md border-2 border-white"></span>
                    <div className="flex items-start gap-3">
                      <Icon
                        icon="lucide:check-circle"
                        className="w-5 h-5 mt-0.5 text-[#005851] flex-shrink-0"
                      />
                      <p className="text-[#092936] text-base leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Motion.div>

      <ProjectImages project={project} />

      
      {/* ContactDiv */}
      
    </div>
  );
};
export default DemandForecasting;
