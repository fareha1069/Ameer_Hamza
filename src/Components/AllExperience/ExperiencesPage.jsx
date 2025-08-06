import React from 'react'
import ridge from '../../assets/company3.jpg'
import hiker from '../../assets/company2.jpg'
import logo1 from '../../assets/logo1.png'
import manifest from '../../assets/compani1.jpg'
import feActive from '../../assets/company4.avif'
// import logo1 from '../../assets/logo1.png'
import ExperienceCard from './ExperienceCard';
import { motion as Motion } from 'motion/react'
// import bg from '../../assets/bg.png'
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

          text: "Designed and implemented a seasonal demand forecasting tool to predict monthly inventory needs, maintaining optimal stock levels across five international markets, including peak events such as Prime Day and Black Friday/Cyber Monday."
        },
        {

          text: "Coordinated cross-functionally with suppliers, accounts, advertising, operations, and Amazon teams to ensure successful new product launches."
        },
        {

          text: "Managed and maintained the ERP software for Amazon inventory, streamlining processes and ensuring data accuracy."
        },
        {

          text: "Onboarded Amazon Warehouse Distribution (AWD), reducing costs and eliminating numerous manual processes."
        },
        {
          icon: logo1,
          text: "Delivered weekly inventory and performance reports to leadership, including the CEO, to support data-driven decision-making."
        },
        {

          text: "Improved the Inventory Performance Index (IPI) score from 600 to 780, significantly enhancing operational efficiency and optimizing storage utilization."
        },
        {
          text: "Oversaw supplier management for Amazon purchase orders (POs), ensuring precise inspections, shipment tracking, timely deliveries, and cost reductions."
        },
        {
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
    },
    {
      title: "Supply Chain Manager",
      company: "Hiker Hunger Outfitters · Part-time",
      duration: "Aug 2024 – Jan 2025 · 6 mos",
      location: "Remote",
      shortDescription:
        "As a part-time Supply Chain Manager at Hiker Hunger Outfitters, I developed forecasting tools to manage seasonal demand, coordinated supplier operations for efficient product launches, and implemented inventory tracking systems. My initiatives led to a 25% reduction in DTC order fulfillment costs and a notable improvement in the Amazon IPI score. I also recovered over $10,000 by reconciling inventory discrepancies and filing reimbursement claims.",
      companyLogo: hiker, // replace with actual imported logo variable
      responsibilities: [
        {
          text: "Developed a seasonal demand forecasting tool to optimize monthly inventory levels for Amazon and Shopify, ensuring preparedness for peak events."
        },
        {
          text: "Coordinated with suppliers for inspections, new product launches, and timely shipment tracking to support operational continuity."
        },
        {
          text: "Designed advanced inventory tracking models using Excel, improving data accuracy and transparency across departments."
        },
        {
          text: "Replaced Amazon's MCF app with a local 3PL in the United States, reducing direct-to-consumer order fulfillment costs by 25%."
        },
        {
          text: "Improved the Amazon Inventory Performance Index (IPI) score from 550 to 620, optimizing storage utilization and operational efficiency."
        },
        {
          text: "Reconciled Amazon inventory discrepancies and recovered over $10,000 through efficient reimbursement claims management."
        }
      ],
      skills: [
        "Demand Forecasting",
        "Inventory Optimization",
        "Amazon FBA",
        "Excel Modeling",
        "Logistics Coordination",
        "Third-Party Logistics (3PL)",
        "Supplier Management"
      ]
    },
    {
      title: "Demand Planner and FBA Operations",
      company: "Manifest IND LLC · Part-time",
      duration: "Jun 2022 – Dec 2023 · 1 yr 7 mos",
      location: "Remote",
      shortDescription:
        "At Manifest IND LLC, I managed inventory forecasting, supplier coordination, and Amazon FBA operations across international markets. I launched over 20 products, optimized logistics costs, and developed custom inventory tracking tools. My efforts improved Amazon account health and raised the IPI score from 650 to 850. I also recovered over $40,000 by resolving inventory discrepancies and reimbursement claims.",
      companyLogo: manifest, // Replace with the actual logo import variable
      responsibilities: [
        {
          text: "Forecasted monthly inventory needs for Amazon and Shopify across two international markets, ensuring timely replenishment for peak sales events."
        },
        {
          text: "Led the launch of 20+ new products by managing supplier coordination, and overseeing packaging and manufacturing processes."
        },
        {
          text: "Identified cost-effective freight options for DDP shipments to Amazon and 3PL warehouses, significantly reducing logistics costs."
        },
        {
          text: "Developed customized inventory tracking models in Excel to assist the accounting team in reconciling supplier payments based on actual receipts."
        },
        {
          text: "Onboarded Amazon Warehouse Distribution (AWD), eliminating manual workflows and improving operational efficiency."
        },
        {
          text: "Managed the Amazon catalog and account health, regularly raising and resolving tickets to address compliance issues and maintain continuity."
        },
        {
          text: "Improved Amazon Inventory Performance Index (IPI) score from 650 to 850, enhancing storage utilization and account efficiency."
        },
        {
          text: "Reconciled Amazon inventory discrepancies and recovered over $40,000 by filing claims for short-received, damaged, or lost inventory."
        }
      ],
      skills: [
        "Demand Planning",
        "Inventory Reconciliation",
        "Amazon FBA",
        "Warehouse Operations",
        "Amazon Listings",
        "Supplier Sourcing",
        "Microsoft Excel",
        "Purchase Orders",
        "Order Fulfillment",
        "Amazon IPI",
        "SeSu Communication"
      ]
    },
    {
      title: "Procurement Manager",
      company: "Specstickco · Contract",
      duration: "Aug 2022 – Oct 2022 · 3 mos",
      location: "Remote",
      shortDescription:
        "At Specstickco, I led the sourcing of four new products by identifying reliable suppliers, creating detailed cost and quality comparisons, and assisting in supplier selection. I enhanced the company’s product portfolio and sourcing strategy through strong vendor communication and negotiation.",
      companyLogo: hiker, // Replace with actual import/variable name for the logo
      responsibilities: [
        {
          text: "Sourced four new products by researching and contacting suppliers, creating detailed comparison documents, and assisting with supplier selection and rate negotiation."
        },
        {
          text: "Improved the company’s product lineup through effective communication and strategic sourcing initiatives."
        }
      ],
      skills: [
        "Supplier Negotiation",
        "Research Skills",
        "Sourcing",
        "Supply Chain Operations",
        "Microsoft Excel",
        "Time Management",
        "Supply Chain Management",
        "Communication",
        "Vendor Management"
      ]
    },
    {
      title: "Amazon Supply Chain Manager",
      company: "FE Active · Full-time",
      duration: "Jan 2021 – May 2022 · 1 yr 5 mos",
      location: "Remote",
      shortDescription:
        "At FE Active, I led demand forecasting and production planning for Amazon and Shopify across five global markets. I created efficient inventory tracking tools, managed logistics and customs, and maintained Amazon account health. My efforts improved operational continuity and boosted the IPI score from 550 to 710.",
      companyLogo: feActive, // Replace with actual logo variable
      responsibilities: [
        {
          text: "Conducted meticulous demand forecasting and production order planning to ensure seamless inventory management for Amazon and Shopify."
        },
        {
          text: "Managed supplier communication, logistics coordination, and customs clearances to ensure timely delivery to 3PL and Amazon fulfillment centers across five international markets."
        },
        {
          text: "Created a spreadsheet-based inventory tracking tool to monitor receipts across international markets, improving operational accuracy and visibility."
        },
        {
          text: "Managed the Amazon catalog and account health, raising and resolving tickets with Amazon to address compliance and technical issues promptly."
        },
        {
          text: "Improved the Inventory Performance Index (IPI) score from 550 to 710, significantly boosting operational efficiency and storage utilization."
        }
      ],
      skills: [
        "Logistics Management",
        "Amazon Supply Chain",
        "Inventory Management",
        "Inventory Forecasting",
        "Project Planning",
        "E-Procurement",
        "Microsoft Excel",
        "Global Sourcing",
        "Inventory Reconciliation",
        "Warehouse Management Systems"
      ]
    }
  ];

  return (

    <Motion.div
      className="flex flex-wrap justify-evenly items-center py-12 w-[vw]"
    // style={{ backgroundImage: `url(${bg})` }}
    >
      <ExperienceCard experience={experience[0]} />
      <ExperienceCard experience={experience[1]} />
      <ExperienceCard experience={experience[2]} />
      <ExperienceCard experience={experience[3]} />
      <ExperienceCard experience={experience[4]} />
    </Motion.div>
  )
}

export default ExperiencesPage