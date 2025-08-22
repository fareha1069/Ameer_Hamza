import React from "react";
import ProjectGen from "./ProjectGen";
import img1 from "../../assets/Projects/Consultation/img1.png";
import img2 from "../../assets/Projects/Consultation/img2.png";
import img3 from "../../assets/Projects/Consultation/img3.png";

const title = "Consultation to 3PL for Prime Day FBA Shipment"
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
    <ProjectGen title={title} skills={skills} responsibilities={responsibilities} project={project} />
  );
};
export default Consultation;
