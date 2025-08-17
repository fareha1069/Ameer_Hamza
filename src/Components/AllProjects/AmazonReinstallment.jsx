import React from "react";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";
import bg from "../../assets/Intro/bg.png";
import ProjectImages from "./ProjectImages";
import img1 from "../../assets/Projects/ListingM/img1.png";
import img2 from "../../assets/Projects/ListingM/img2.png";
import img3 from "../../assets/Projects/ListingM/img3.png";
import img4 from "../../assets/Projects/ListingM/img4.png";

const skills = [
  "Amazon FBA",
  "Amazon Seller Central",
  "Amazon Listing",
  "Ecommerce Support",
  "Communications",
  "Legal Negotiation",
];

const responsibilities = [
  "Manage and optimize product listings on Amazon Seller Central, ensuring accurate content, keyword-rich descriptions, and compliance with Amazon policies.",
  "Coordinate and oversee Amazon FBA operations, including inventory planning, inbound shipments, stock replenishments, and performance monitoring.",
  "Provide end-to-end eCommerce support by assisting in product launches, troubleshooting listing issues, and ensuring smooth order processing.",
  "Handle customer communications by responding to queries, resolving disputes, and maintaining a positive brand image to drive customer satisfaction.",
  "Collaborate with cross-functional teams to develop and implement strategies for increasing product visibility, sales, and profitability.",
  "Negotiate with legal teams, suppliers, or partners to ensure favorable terms, compliance with regulations, and risk mitigation in agreements.",
  "Conduct regular analysis of sales trends, competitor activity, and market opportunities to inform data-driven business decisions.",
];

const project = {
  heading: "Amazon Policy & Compliance Case Studies",
  desc: "Below are some key cases I handled related to Amazon policy compliance and listing challenges. These examples highlight my ability to resolve complex issues such as detailed page removals, restricted product statuses, and compliance-driven listing management.",
  items: [
    {
      text: "Reason of detailed page removal.",
      image: img1,
    },
    {
      text: "5 wallet listings had their detailed pages removed.",
      image: img2,
    },
    {
      text: "Recall Bound Status imposed by Amazon.",
      image: img3,
    },
    {
      image: img4,
    },
  ],
};


const AmazonReinstallment = () => {
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
              Amazon Listing Reinstallment
            </Motion.h1>
            <p className="text-[#092936] text-base leading-relaxed">
              To confront a product safety concern on Amazon for "Hayvenhurst".
              The detailed pages of five wallet listings were removed. Amazon
              then placed these listings in a recall-bound status for a 30-day
              period. Once this duration elapsed, I was required to proceed with
              an inventory removal order, which involved clearing out all
              existing inventory. To reinstate the detailed pages and resume
              selling, I also needed to complete the process by submitting
              safety reports. This entire sequence involves a considerable
              amount of time, encompassing a 30-day recall period + time for the
              disposal order to complete + submitting reports for regaining
              detailed pages + replenishing stock back to resume selling.
              <br/> Through proactive communication, evidence of quality and
              compliance. I took a determined stance to resolve this challenge
              ASAP and I secured reinstatement for all five listings before 30
              days without initiating a removal order. The issue started on Mar
              24, 2023 and was reinstated on Apr 14, 2023, serving as clear
              proof of my work. This approach not only resolved the issue
              swiftly but also maintained product availability and strengthened
              our rapport with Amazon's platform.
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
export default AmazonReinstallment;
