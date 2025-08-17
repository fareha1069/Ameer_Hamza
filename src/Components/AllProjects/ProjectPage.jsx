import React from "react";
import bg from "../../assets/Intro/bg.png";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";
import ProjectMenu from "./ProjectMenu";
import image from "../../assets/Projects/Project.png";
import Contact from "../../Components/LandingComponents/Contact";

const ProjectPage = () => {
  const skills = [
    "Demand Forecasting",
    "Demand",
    "3PL Operations",
    "Project Management",
    "Hardwork",
    "Demand Forecasting",
    "Demand",
    "3PL Operations",
  ];
  const TimelineData = [
  {
    title: "Demand Forecasting",
    slug: "/demand-forecasting",
    text: "Managed demand planning and forecasting for 20+ FBA brands. Optimized stock levels, coordinated supplier replenishments, and minimized excess inventory, achieving strong IPI scores and steady growth.",
  },

  {
    title: "Purchase Order Management",
    slug: "/purchase-order-management",
    text: "Handled production orders for 5+ brands, coordinating with suppliers on production and quality. Tracked orders and documents using Excel, ensuring timely deliveries and smooth supply chain operations.",
  },

  {
    title: "Amazon Listing Management",
    slug: "/amazon-listing-management",
    text: "Managed listings end-to-end: creation, optimization, and monitoring. Improved conversion rates with keyword optimization and images, while handling inventory, reviews, and issue resolution.",
  },

  {
    title: "Amazon Listing Reinstatement",
    slug: "/amazon-listing-reinstatement",
    text: "Resolved a product safety issue for Hayvenhurst wallets. Cleared stock, prepared safety reports, and reinstated five listings to resume sales with minimal disruption.",
  },

  {
    title: "Amazon Inventory Reconciliation & Reimbursements",
    slug: "/amazon-inventory-reconciliation-reimbursements",
    text: "Reconciled inventory for 8 brands and secured reimbursements for discrepancies, damages, and returns. Recovered $27K+ for The Ridge in a single month.",
  },

  {
    title: "Consultation to 3PL for Prime Day FBA Shipment",
    slug: "/consultation-3pl-prime-day-fba-shipment",
    text: "Guided a 3PL on their first FBA shipment before Prime Day 2023. Advised on packing, labeling, and compliance, ensuring on-time delivery and error-free stock preparation.",
  },
];

const intro  = "This collection highlights key e-commerce and supply chain projects, covering demand forecasting, purchase order management, Amazon operations, inventory reimbursements, and 3PL consultations. Each project reflects hands-on problem-solving and delivering measurable results across global marketplaces."
  return (
    <>
      <Motion.div
        className="flex flex-wrap justify-evenly items-center gap-4 relative overflow-hidden p-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center w-[100vw] lg:w-[45vw] my-7">
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
            PROJECTS
          </Motion.h1>
          <p className="text-base md:text-xl lg:w-[50vw] mb-7">
           {intro}
          </p>
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

        <div className="w-[90vw] md:w-[60vw] lg:w-[40vw]">
          <Motion.img
            src={image}
            alt="Projects"
            className="w-[90vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </Motion.div>

      <div className="flex flex-col justify-center items-center py-10">
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
          Highlights of My Key Projects
        </Motion.h1>
       
        <ProjectMenu events={TimelineData} />
      </div>
        <Contact/>
    </>
  );
};

export default ProjectPage;
