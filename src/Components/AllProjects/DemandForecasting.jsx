import React from "react";
import ProjectGen from "./ProjectGen";
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

const title = "Demand Forecasting"
const desc = "With a strong track record, I excel in demand planning and forecasting for FBA brands, successfully managing 20+ brands to date. My proficiency lies in demand planning and inventory forecasting through efficient projection models, ensuring optimal stock levels and minimizing excess inventory. Collaborating closely with suppliers, I project inventory for FBA replenishments and production orders, and for some brands, I manage inventory replenishment directly from China. These efforts result in impressive IPI scores and in-stock metrics for the brands under my management. My expertise in supply chain optimization is evident through tangible results and operational efficiency, significantly contributing to the success and growth of the brands I work with."
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
    <ProjectGen title={title} desc={desc} skills={skills} responsibilities={responsibilities} project={project} />
  );
};
export default DemandForecasting;
