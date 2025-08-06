import React from 'react'
import ridge from '../../assets/company3.jpg'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
// import logo1 from '../../assets/logo1.png'
import ExperienceCard from './ExperienceCard';
import {motion as Motion } from 'motion/react'
import bg from '../../assets/bg.png'
const ExperiencesPage = () => {

const experience = [
  {
    title: "Amazon Supply Chain Manager",
    company: "The Ridge · Full-time",
    duration: "Oct 2022 – Feb 2025 · 2 yrs 5 mos",
    location: "Santa Monica, California, United States · Remote",
    shortDescription:
    "As a Supply Chain Manager at Amazon, I developed forecasting tools to optimize inventory across global markets, especially during peak sales events. I led ERP system improvements and streamlined warehouse operations, saving both time and cost. My efforts in data-driven reporting helped leadership make informed decisions. I improved Amazon's IPI score from 600 to 780, enhancing efficiency. I also recovered over $150,000 by managing inventory claims and vendor coordination.",
    companyLogo: ridge,
    responsibilities: [
      {
        icon: logo1,
        text: "Designed and implemented a seasonal demand forecasting tool to predict monthly inventory needs, maintaining optimal stock levels across five international markets, including peak events such as Prime Day and Black Friday/Cyber Monday."
      },
      {
        icon: logo2,
        text: "Coordinated cross-functionally with suppliers, accounts, advertising, operations, and Amazon teams to ensure successful new product launches."
      },
      {
        icon: logo3,
        text: "Managed and maintained the ERP software for Amazon inventory, streamlining processes and ensuring data accuracy."
      },
      {
        icon: logo4,
        text: "Onboarded Amazon Warehouse Distribution (AWD), reducing costs and eliminating numerous manual processes."
      },
      {
        icon: logo1,
        text: "Delivered weekly inventory and performance reports to leadership, including the CEO, to support data-driven decision-making."
      },
      {
        icon: logo2,
        text: "Improved the Inventory Performance Index (IPI) score from 600 to 780, significantly enhancing operational efficiency and optimizing storage utilization."
      },
      {
        icon: logo3,
        text: "Oversaw supplier management for Amazon purchase orders (POs), ensuring precise inspections, shipment tracking, timely deliveries, and cost reductions."
      },
      {
        icon: logo4,
        text: "Reconciled Amazon inventory discrepancies and recovered over $150,000 by filing claims for short-received, damaged, and lost inventory."
      }
    ],
    skills: [
      "Supply Chain Optimization",
      "Inventory Management",
      "ERP Systems",
      "Forecasting",
      "Amazon FBA",
      "Data Analysis",
      "Cross-functional Leadership"
    ]
  }
];

  return (

    <Motion.div
        className="flex flex-wrap justify-evenly items-center gap-1 relative overflow-hidden py-12 w-[vw]"
        // style={{ backgroundImage: `url(${bg})` }}
      >
    <ExperienceCard experience = {experience[0]}/>
      </Motion.div>
  )
}

export default ExperiencesPage