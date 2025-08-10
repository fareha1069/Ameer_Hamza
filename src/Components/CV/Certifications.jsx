import React from 'react';
import paf from '../../assets/CVLogo/paf.jpg';
import amal from '../../assets/CVLogo/amal.jpg';
import uci from '../../assets/CVLogo/uci.jpg'; // Not used here, but ready if needed
import CertificationCard from './CertificationCard';

const certifications = [
  {
    logo: amal,
    title: "Fellow at Amal Career Prep - Fellowship",
    issuer: "Amal Academy",
    issued: "Oct 2017 - Present · 7 yrs 11 mos",
    credentialId: "Amal-2020-Fellow",
    details: [
      "Completed a competitive 3-month fellowship focused on soft skills and professional development.",
      "Received training in communication, teamwork, leadership, and problem-solving.",
      "Worked with industry mentors to improve career readiness.",
      "Delivered mock presentations and participated in role-playing activities to build confidence."
    ]
  },
  {
    logo: paf,
    title: "Certificate of Membership",
    issuer: "PAFLA - Pakistan Freelancers Association",
    issued: "Mar 2024",
    credentialId: "5579039828895916",
    details: [
      "Recognition & Belonging: You are part of a supportive, active community of Pakistani freelancers.",
      "Access to Resources: You gain access to training, financial facilitation, events, and networking.",
      "Empowerment: PAFLA supports your growth—from skill building to policy-level recognition.",
      "Future Opportunities: With recent partnerships and initiatives, your membership opens doors to continued development and broader opportunities."
    ]
  }
];

const Certifications = () => {
  return (
    <div className="w-[80%] mx-auto">
      <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
      <div className="space-y-6">
        {certifications.map((cert, idx) => (
          <CertificationCard key={idx} certification={cert} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;

// Understood the interrelationship between demand planning, supply planning, and constrained forecasting.

// Learned to use data-driven approaches for effective supply chain planning.

// Gained practical skills in using Excel to analyze historical data and forecast future demand.

// Explored how to identify capacity limitations and adjust forecasts accordingly.

// Learned to measure and quantify planning performance for continuous improvement.

// Built foundational knowledge in applying data science to real-world supply chain challenges.

// Strengthened job-relevant skills through hands-on exercises and expert-led modules.