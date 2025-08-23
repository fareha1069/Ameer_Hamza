import React from "react";
import ProjectGen from "./ProjectGen";
import img1 from "../../assets/Projects/ListingM/img1.png";
import img2 from "../../assets/Projects/ListingM/img2.png";
import img3 from "../../assets/Projects/ListingM/img3.png";
import img4 from "../../assets/Projects/ListingM/img4.png";

const title = "Amazon Listing Reinstallment"
const desc = `To confront a product safety concern on Amazon for "Hayvenhurst". The detailed pages of five wallet listings were removed. Amazon then placed these listings in a recall-bound status for a 30-day period. Once this duration elapsed, I was required to proceed with an inventory removal order, which involved clearing out all existing inventory. To reinstate the detailed pages and resume selling, I also needed to complete the process by submitting safety reports. This entire sequence involves a considerable amount of time, encompassing a 30-day recall period + time for the disposal order to complete + submitting reports for regaining detailed pages + replenishing stock back to resume selling.
Through proactive communication, evidence of quality and compliance. I took a determined stance to resolve this challenge ASAP and I secured reinstatement for all five listings before 30 days without initiating a removal order. The issue started on Mar 24, 2023 and was reinstated on Apr 14, 2023, serving as clear proof of my work. This approach not only resolved the issue swiftly but also maintained product availability and strengthened our rapport with Amazon's platform.`;
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
    <ProjectGen title={title} desc={desc} skills={skills} responsibilities={responsibilities} project={project} />
  );
};
export default AmazonReinstallment;
