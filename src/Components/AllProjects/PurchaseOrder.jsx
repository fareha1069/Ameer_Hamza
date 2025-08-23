import React from "react";
import ProjectGen from "./ProjectGen";
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

const title = "Purchase Order Management"
const desc = `I'm experienced in handling production orders for over 5 brands. I communicate with suppliers about production and quality. I utilize my Excel model to monitor the progress of order statuses, while also meticulously recording crucial documents and purchase order information within the same model. Smooth delivery and receipt of shipments are my focus, and I file claims when discrepancies arise. My attention to detail ensures successful production and a smooth supply chain. I'm sharing a few documents for reference, while some remain confidential due to privacy reasons.`;
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
    <ProjectGen title={title} desc={desc} skills={skills} responsibilities={responsibilities} project={project} />
  );
};
export default PurchaseOrder;
