import React from "react";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";
import bg from "../../assets/Intro/bg.png";
import ProjectImages from "./ProjectImages";
import img1 from "../../assets/Projects/Purchase/img1.png";
import img2 from "../../assets/Projects/Purchase/img2.png";
import img3 from "../../assets/Projects/Purchase/img3.png";
import img4 from "../../assets/Projects/Purchase/img4.png";
import img5 from "../../assets/Projects/Purchase/img5.png";
import img6 from "../../assets/Projects/Purchase/img6.png";
import img7 from "../../assets/Projects/Purchase/img7.png";
import img8 from "../../assets/Projects/Purchase/img8.png";
import img9 from "../../assets/Projects/Purchase/img9.png";
import img10 from "../../assets/Projects/Purchase/img10.png";
import img11 from "../../assets/Projects/Purchase/img11.png";
import img12 from "../../assets/Projects/Purchase/img12.png";

const skills = [
  "Order Management",
  "Procurement",
  "Supply Chain & Logistics",
  "Supply Chain Management",
  "Order Tracking",
  "Purchase Orders",
  "Order Processing",
  "Ecommerce Order Fulfillment",
  "Ecommerce",
];

const responsibilities = [
  "Manage and track end-to-end order processing workflows, ensuring accurate entry, timely updates, and smooth coordination between sales, inventory, and logistics teams.",
  "Handle procurement activities by identifying suppliers, issuing purchase orders, and maintaining vendor relationships to secure quality materials at competitive costs.",
  "Oversee supply chain and logistics operations, including transportation planning, warehouse coordination, and timely delivery to optimize service and reduce lead times.",
  "Implement supply chain management strategies that align procurement, order processing, and logistics to ensure operational efficiency and cost savings.",
  "Monitor and maintain order tracking systems, providing real-time updates to customers and stakeholders while proactively resolving delays or discrepancies.",
  "Prepare and manage purchase orders, ensuring proper documentation, approvals, and compliance with procurement policies and financial controls.",
  "Ensure smooth order processing for ecommerce operations, including payment verification, fulfillment coordination, and shipping management for customer satisfaction.",
  "Execute ecommerce order fulfillment operations by coordinating warehousing, packaging, and delivery, ensuring timely and accurate shipment of customer orders.",
];

const project = {
  heading: "End-to-End Supply Chain & Operations Excellence",
  desc: "Below are some of the key achievements and responsibilities across demand forecasting, procurement, order management, logistics, and warehouse operations. Each initiative highlights how accurate planning, strategic sourcing, and seamless execution improve efficiency, reduce costs, and ensure consistent business growth.",
  items: [
    {
      text: 'A glimpse of my Purchase Order Tracking Model',
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
    {
      image: img8,
    },
    {
      image: img9,
    },
    {
      image: img10,
    },
    {
      image: img11,
    },
    {
      image: img12,
    },
  ],
};

const PurchaseOrder = () => {
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
              Purchase Order Management
            </Motion.h1>
            <p className="text-[#092936] text-base leading-relaxed">
              I'm experienced in handling production orders for over 5 brands. I
              communicate with suppliers about production and quality. I utilize
              my Excel model to monitor the progress of order statuses, while
              also meticulously recording crucial documents and purchase order
              information within the same model. Smooth delivery and receipt of
              shipments are my focus, and I file claims when discrepancies
              arise. My attention to detail ensures successful production and a
              smooth supply chain. I'm sharing a few documents for reference,
              while some remain confidential due to privacy reasons.
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
export default PurchaseOrder;
