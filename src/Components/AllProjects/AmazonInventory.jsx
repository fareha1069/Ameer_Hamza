import React from "react";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";
import bg from "../../assets/Intro/bg.png";
import ProjectImages from "./ProjectImages";
import img1 from "../../assets/Projects/Inventory/img1.png";
import img2 from "../../assets/Projects/Inventory/img2.png";
import img3 from "../../assets/Projects/Inventory/img3.png";
import img4 from "../../assets/Projects/Inventory/img4.png";
import img5 from "../../assets/Projects/Inventory/img5.png";
import img6 from "../../assets/Projects/Inventory/img6.png";
import img7 from "../../assets/Projects/Inventory/img7.png";
import img8 from "../../assets/Projects/Inventory/img8.png";

const skills = [
  "Ecommerce",
  "Account Reconciliation",
  "Amazon FBA",
  "Amazon",
  "Amazon Private Label",
  "Inventory Management",
  "Case Management",
  "Legal Negotiation",
];

const responsibilities = [
  "Conduct detailed account reconciliation by reviewing financial statements, cross-verifying transactions, and resolving discrepancies to ensure accuracy, compliance, and transparency in ecommerce operations.",
  "Oversee end-to-end Amazon FBA operations, including inventory shipments to Amazon fulfillment centers, tracking delivery performance, managing reimbursements, and ensuring timely resolution of operational issues.",
  "Develop, manage, and optimize Amazon private label product listings by performing in-depth keyword research, competitor analysis, content optimization, and continuous performance monitoring to maximize visibility and conversions.",
  "Implement effective inventory management strategies by forecasting demand, monitoring stock levels, reducing storage fees, and ensuring timely replenishment to maintain consistent product availability across marketplaces.",
  "File, monitor, and manage cases with Amazon Seller Support for reimbursement claims, lost or damaged inventory, inbound shipment discrepancies, and other operational issues, while ensuring timely follow-ups until resolution.",
  "Negotiate and resolve legal and compliance-related matters by preparing documentation, communicating with relevant stakeholders, and ensuring that all agreements align with organizational goals and legal standards.",
  "Provide comprehensive ecommerce support by maximizing recovered funds, streamlining seller account performance, and implementing best practices to enhance operational efficiency and profitability.",
  "Collaborate with cross-functional teams such as logistics, finance, and marketing to align strategies, improve workflows, and deliver sustainable growth in ecommerce performance.",
];

const project = {
  heading: "Amazon Policy & Compliance Expertise",
  desc: "Here are selected case studies showcasing my work in resolving complex Amazon policy and compliance issues. These examples demonstrate my ability to navigate challenges such as detailed page removals, restricted product statuses, and compliance-driven listing management, ensuring uninterrupted business operations and policy adherence.",
  items: [
    {
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
  ],
};

const AmazonInventory = () => {
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
              Amazon Inventory Reconciliation and Reimbursements
            </Motion.h1>
            <p className="text-[#092936] text-base leading-relaxed">
              I have successfully reconciled inventory for 8 Amazon brands
              across diverse marketplaces and secured reimbursements through
              well-documented claims. My experience includes filing claims for a
              wide range of issues, such as:
              <br />- Inbound discrepancies
              <br />- FBA damages
              <br />- Carrier destruction
              <br />- Lost and misplaced inventory
              <br />- Returns
              <br />- Unused shipping labels
              <br />- Incorrect weight/dimensions
              <br />I am committed to maximizing client funds by ensuring
              accurate inventory management and effective reimbursement
              recovery. For example, I successfully obtained a reimbursement of
              over <strong>$27,000</strong> for <em>The Ridge</em> within a
              single month. While I cannot disclose details for other brands due
              to confidentiality, my proven track record highlights my ability
              to optimize financial outcomes for clients on the Amazon platform.
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
export default AmazonInventory;
