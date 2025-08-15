import { React } from "react";
import { motion as Motion } from "motion/react";
import ProjectMenu from "../AllProjects/ProjectMenu"
import bg from '../../assets/bg.png'
import { Icon } from "@iconify/react";

const Project = () => {
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

  return (
    <div className="flex flex-col h-full justify-center py-12 mb-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Motion.h1
        className="title text-5xl md:text-6xl font-bold text-[#092936] text-center tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
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
      <ProjectMenu events={TimelineData} />

      <Motion.p className="flex items-center justify-center space-x-1 text-gray-600 text-center mt-5"
        animate={{ y: [0, 2, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <a href="/projects" className="flex items-center gap-1 hover:underline">
          <span>Show all Projects</span>
          <Icon
            icon="mdi:chevron-double-right"
            className="w-5 h-5"
          />
        </a>

      </Motion.p>

    </div>
  );
};
export default Project;