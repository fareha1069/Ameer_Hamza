import React from "react";
import ProjectGen from "../AllProjects/ProjectGen";
import img1 from "../../assets/Projects/Inventory/img1.png";
import img2 from "../../assets/Projects/Inventory/img2.png";
import img3 from "../../assets/Projects/Inventory/img3.png";
import img4 from "../../assets/Projects/Inventory/img4.png";
import img5 from "../../assets/Projects/Inventory/img5.png";
import img6 from "../../assets/Projects/Inventory/img6.png";
import img7 from "../../assets/Projects/Inventory/img7.png";
import img8 from "../../assets/Projects/Inventory/img8.png";

const title = "Amazon Inventory Reconciliation and Reimbursements";
const desc = `I have successfully reconciled inventory for 8 Amazon brands across diverse marketplaces and secured reimbursements through well-documented claims. My experience includes filing claims for a wide range of issues, such as:
- Inbound discrepancies
- FBA damages
- Carrier destruction
- Lost and misplaced inventory
- Returns
- Unused shipping labels
- Incorrect weight/dimensions
I am committed to maximizing client funds by ensuring accurate inventory management and effective reimbursement recovery. For example, I successfully obtained a reimbursement of over $27,000 for The Ridge within a single month. While I cannot disclose details for other brands due to confidentiality, my proven track record highlights my ability to optimize financial outcomes for clients on the Amazon platform.`;

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
    <ProjectGen title={title} desc={desc} skills={skills} responsibilities={responsibilities} project={project} />
  );
};
export default AmazonInventory;
