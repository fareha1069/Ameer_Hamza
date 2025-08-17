import React from 'react'
import company1 from '../../assets/Experience/compani1.jpg'
import company2 from '../../assets/Experience/company2.jpg'
import company3 from '../../assets/Experience/company3.jpg'
import Experience from './Experience';

const experienceData = [
  {
    company: "Ridge",
    title: "Amazon Supply Chain Manager",
    date: "Oct 2022 - Present",
    description:
      "Spearheaded seasonal demand forecasting, boosting inventory accuracy across five global markets and key sales events Streamlined Amazon operations by managing ERP systems",
    iconBg: "#facc15",
    imageIcon: company3
  },
  {
    company: "Hiker Hunger Outfitters",
    title: "Supply Chain Manager",
    date: "Aug 2024 - Jan 2025",
    description:
      "Developed demand forecasting tools, streamlined supplier coordination and 3PL onboarding, boosting IPI score and recovering $10K+ via Amazon claim reimbursements.",
    iconBg: "#60a5fa",
    imageIcon: company2
  },
  {
    company: "Manifest IND LLC",
    title: "Demand Planner and FBA Operations",
    date: "Jun 2022 - Dec 2023",
    description:
      "Forecasted inventory for Amazon & Shopify across two markets, launched 20+ products, and cut logistics costs via AWD onboarding.",
    iconBg: "#34d399",
    imageIcon: company1
  },

  {
    company: "Specstickco",
    title: "Procurement Manager",
    date: "Aug 2022 - Oct 2023",
    description:
      "Sourced four new products by researching and contacting suppliers, creating detailed comparison documents, and assisting with supplier selection and rate negotiation.",
    iconBg: "#34d399",
    //  imageIcon : company1
  },

  {
    company: "FEActive",
    title: "Amazon Supply Chain Manager",
    date: "Jan 202 - May 2022",
    description:
      "Conducted meticulous demand forecasting and production order planning to ensure seamless inventory management for Amazon and Shopify.",
    iconBg: "#60a5fa",
    //  imageIcon : company1
  },

];
const LandingExperience = () => {
  return (
    <div>
        <Experience experiences={experienceData} />
    </div>
  )
}

export default LandingExperience