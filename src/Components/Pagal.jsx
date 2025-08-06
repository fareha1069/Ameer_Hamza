import React from "react";
// import { experienceData } from "./experienceData"; // or use directly if same file
import ridge from '../assets/company3.jpg'
const Pagal = () => {
const experienceData = [
  {
    id: 1,
    companyLogo: ridge,
    title: "Amazon Supply Chain Manager",
    company: "The Ridge · Full-time",
    duration: "Oct 2022 – Feb 2025 · 2 yrs 5 mos",
    location: "Santa Monica, California, United States · Remote",
    responsibilities: [
      "Designed and implemented a seasonal demand forecasting tool to predict monthly inventory needs, maintaining optimal stock levels across five international markets, including peak events such as Prime Day and Black Friday/Cyber Monday.",
      "Coordinated cross-functionally with suppliers, accounts, advertising, operations, and Amazon teams to ensure successful new product launches.",
      "Managed and maintained the ERP software for Amazon inventory, streamlining processes and ensuring data accuracy.",
      "Onboarded Amazon Warehouse Distribution (AWD), reducing costs and eliminating numerous manual processes.",
      "Delivered weekly inventory and performance reports to leadership, including the CEO, to support data-driven decision-making.",
      "Improved the Inventory Performance Index (IPI) score from 600 to 780, significantly enhancing operational efficiency and optimizing storage utilization.",
      "Oversaw supplier management for Amazon purchase orders (POs), ensuring precise inspections, shipment tracking, timely deliveries, and cost reductions.",
      "Reconciled Amazon inventory discrepancies and recovered over $150,000 by filing claims for short-shipments and losses.",
    ],
    skills: [
      "Logistics Management",
      "Inventory Forecasting",
      "Amazon Reimbursements",
      "Warehouse Operations",
      "Product Launch",
      "Amazon Inventory Management",
      "Inventory Planning",
      "Microsoft Excel",
      "Amazon IPI",
      "Inventory Reconciliation",
      "Warehouse Management Systems",
      "Inventory Reports",
    ],
  },
];

    const experience = experienceData[0]; // Only using first for now

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 text-gray-900">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200">

        {/* Header */}
        <div className="flex items-start sm:items-center gap-6 mb-6 flex-col sm:flex-row">
          <img
            src={experience.companyLogo}
            alt="Company Logo"
            className="w-20 h-20 object-contain rounded-md shadow-sm"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{experience.title}</h1>
            <p className="text-sm text-gray-600 mt-1">{experience.company}</p>
            <p className="text-sm text-gray-600">{experience.duration}</p>
            <p className="text-sm text-gray-600">{experience.location}</p>
          </div>
        </div>

        {/* Description */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            {experience.responsibilities.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Skills</h2>
          <div className="flex flex-wrap gap-3">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1 border border-gray-300 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pagal;
