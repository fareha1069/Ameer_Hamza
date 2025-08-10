import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// import { LuCheckCircle2 } from 'react-icons/lu';
import { BsCheckCircleFill } from 'react-icons/bs';

const CertificationCard = ({ certification }) => {
    const { logo, title, issuer, issued, credentialId, details } = certification;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
            className="flex items-start space-x-5 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
        >
            {/* Logo */}
            <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600">
                <img src={logo} alt="Certification Logo" className="w-10 h-10 object-contain" />
            </div>

            {/* Info */}
            <div className="flex-1">
                <h4 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{issuer}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Issued: {issued}</p>

                {credentialId && (
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                        Credential ID: {credentialId}
                    </p>
                )}

                {details && details.length > 0 && (
                    <ul className="mt-3 space-y-2">
                        {details.map((point, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                              <BsCheckCircleFill className="text-green-500 w-5 h-5 mt-0.5 mr-2" />

                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
};

export default CertificationCard;
