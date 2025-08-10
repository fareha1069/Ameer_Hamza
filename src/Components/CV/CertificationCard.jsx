import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCheckCircle, FiExternalLink } from "react-icons/fi";
import { CheckCircle2 } from "lucide-react"; 

const CertificationCard = ({ certification }) => {
  const { logo, title, issuer, issued, credentialLink, details } = certification;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col md:flex-row bg-[#E8F0F2] p-6 rounded-xl shadow-lg w-full"
    >
      {/* Left Side */}
      <div className="flex flex-col items-center md:items-start md:w-1/3 mb-4 md:mb-0">
        <div className="w-25 h-25 flex items-center justify-center bg-white rounded-full border border-gray-300 shadow-md">
          {logo && (
            <img
              src={logo}
              alt="Certification Logo"
              className="w-14 h-14 object-contain rounded-full"
            />
          )}
        </div>

        <div className="mt-4 text-center md:text-left">
          <p className="text-2xl font-semibold text-gray-800">{issuer}</p>
          <p className="text-sm text-gray-500">Issued: {issued}</p>

          {credentialLink && (
            <a
              href={credentialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center text-sm font-medium text-white bg-[#1A6E67] hover:bg-[#005851] px-3 py-1.5 rounded-lg shadow-sm transition"
            >
              Show credential <FiExternalLink className="ml-2" />
            </a>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-2/3 md:pl-8">
        <h4 className="text-2xl font-bold text-[#005851] mb-6">{title}</h4>
        

        {details && details.length > 0 && (
            
          <div className="relative ml-3 space-y-6">
            <h4 className="text-xl font-bold text-[#1A6E67] mb-6">Key Takeaways</h4>
            {details.map((point, idx) => (
              <motion.div
                key={idx}
                className="relative pl-6 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                {/* Dot on the line */}
                {/* <span className="absolute -left-3 top-1 w-4 h-4 rounded-full bg-[#005851] shadow-md border-2 border-white"></span> */}

                {/* Icon + Text */}
                <div className="flex items-start gap-3 text-xl">
                  <FiCheckCircle className="w-5 h-5 mt-0.5 text-[#005851]  flex-shrink-0" />
                  <p className="text-[#092936] text-base lg:text-md leading-relaxed">
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;
