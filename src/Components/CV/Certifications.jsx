import React from 'react';
import paf from '../../assets/CVLogo/paf.jpg';
import amal from '../../assets/CVLogo/amal.jpg';
import uci from '../../assets/CVLogo/uci.jpg'; // Not used here, but ready if needed
import CertificationCard from './CertificationCard';
import {motion as Motion} from 'motion/react'
const certifications = [
  {
    logo: amal,
    title: "Fellow at Amal Career Prep - Fellowship",
    issuer: "Amal Academy",
    issued: "Jan 2025",
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
    credentialLink: "https://assets.pafla.org.pk/membership-certificates/5579039828895916.pdf",
    details: [
      "Recognition & Belonging: You are part of a supportive, active community of Pakistani freelancers.",
      "Access to Resources: You gain access to training, financial facilitation, events, and networking.",
      "Empowerment: PAFLA supports your growth—from skill building to policy-level recognition.",
      "Future Opportunities: With recent partnerships and initiatives, your membership opens doors to continued development and broader opportunities."
    ]
  },
  {
  logo: uci, // replace with your actual imported logo variable
  title: "Oracle E-Business Suite R12: Advanced Supply Chain Planning",
  issuer: "University of California, Irvine Division of Continuing Education | Coursera",
  issued: "Nov 2023",
  credentialLink: "https://www.coursera.org/account/accomplishments/verify/YVNDEKAPDKF5",
  details: [
    "Understood the interrelationship between demand planning, supply planning, and constrained forecasting.",
    "Learned to use data-driven approaches for effective supply chain planning.",
    "Gained practical skills in using Excel to analyze historical data and forecast future demand.",
    "Explored how to identify capacity limitations and adjust forecasts accordingly.",
    "Learned to measure and quantify planning performance for continuous improvement.",
    "Built foundational knowledge in applying data science to real-world supply chain challenges.",
    "Strengthened job-relevant skills through hands-on exercises and expert-led modules."
  ]
}


];

const Certifications = () => {
  return (
    <div className="flex flex-col w-[95%] lg:w-[75%] items-center justify-center">
      <Motion.h1
        className="title text-4xl md:text-5xl lg:text-6xl font-bold text-[#092936]  tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 10,
          // repeat: Infinity,
          ease: "linear",
        }}
        viewport={{ once: true }}
      >
        Certifications
      </Motion.h1>
      <div className="space-y-6 w-full">
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