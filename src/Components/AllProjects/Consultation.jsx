import React from "react";
import ProjectGen from "./ProjectGen";
import img1 from "../../assets/Projects/Consultation/img1.png";
import img2 from "../../assets/Projects/Consultation/img2.png";
import img3 from "../../assets/Projects/Consultation/img3.png";

const title = "Consultation to 3PL for Prime Day FBA Shipment"
const desc = `I provided key advice to a 3PL shipping to FBA for the first time. I shared packing info on a call and labeling details through email, making sure everything met Amazon's rules. I also arranged a pickup by UPS to ensure their FBA stock was ready. This was crucial for Prime Day on July 11, 2023. I even worked on this project on a Saturday to meet their rush. My help prevented problems for their business and set them up well for Prime Day success.`;
const skills = [
  "Third-Party Logistics (3PL)",
  "Warehouse Management",
  "Shipping Label Creation",
  "Logistics Coordination",
  "Amazon FBA",
  "Supply Chain & Logistics",
  "Ecommerce Operations"
];

const responsibilities = [
  "Coordinated with third-party logistics (3PL) providers to ensure efficient order fulfillment and timely delivery.",
  "Managed warehouse operations, including inventory organization, inbound shipments, and outbound dispatches.",
  "Created and managed shipping labels to streamline packaging and delivery processes.",
  "Oversaw logistics coordination to reduce delays, optimize routes, and improve shipping accuracy.",
  "Handled Amazon FBA shipment planning, preparation, and compliance with Amazon guidelines.",
  "Implemented supply chain strategies to optimize procurement, storage, and distribution.",
  "Supported ecommerce operations by aligning logistics workflows with business growth and customer satisfaction goals."
];

const project = {
  heading: "Supply Chain & Logistics Management",
  desc: "Here are selected case studies showcasing my work in optimizing supply chain and logistics operations. These examples highlight my expertise in coordinating third-party logistics, managing warehouse workflows, handling Amazon FBA requirements, and ensuring smooth shipping processes — all while reducing costs and maintaining efficiency in ecommerce operations.",
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
  ],
};

const Consultation = () => {
  return (
    <ProjectGen title={title} desc={desc} skills={skills} responsibilities={responsibilities} project={project} />
  );
};
export default Consultation;
