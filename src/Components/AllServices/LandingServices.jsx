import React from 'react'
import ServiceCard from './ServiceCard'
import pic1 from '../../assets/Services/logo1.png'
import pic2 from '../../assets/Services/logo2.png'
import pic3 from '../../assets/Services/logo3.png'
import pic4 from '../../assets/Services/logo4.png'
import pic5 from '../../assets/Services/logo5.png'
import pic6 from '../../assets/Services/logo6.png'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'

const title = ["Seasonal Demand Forecasting", "Procurement Order Management", "Freight and Logistics Operations", "3PL Operations Management", "Amazon Inventory Reimbursements", "Amazon FBA/AWD Inventory Management", "DTC Supply Chain Management"]
const desc = [
    "Predict the sales trends to optimize stock during seasonal fluctuations.",
    "Streamline purchase orders ensuring timely and cost-efficient product sourcing.",
    "Manage shipping routes for fast, reliable, and cost-effective deliveries.",
    "Coordinate third-party logistics for seamless warehousing and fulfillment services.",
    "Recover funds for lost or damaged inventory through Amazon claims.",
    "Track and optimize the Amazon warehouse stock for the maximum sales efficiency.",
    "Oversee direct-to-consumer inventory flow ensuring accurate delivery."
];
const links = [
    "/demandForecasting",
    "/orderManagement",
    "/logisticOperations",
    "/PlOperations",
    "/amazonInventory",
    "/amazonFba",
    "/DTCSupplyChain"
]

const LandingServices = (props) => {
    return (
        <div className='flex flex-col justify-center items-center mt-[5%] mb-[5%]'>
            {/* <p className='text-xl font-sm text-white  mb-5'>Strategic, data-driven, and efficiency-focused supply chain solutions for optimized end-to-end operations</p> */}

            {/* <p className='text-4xl font-semibold text-[#092936]'>My Services</p> */}

            <motion.h1
                className="title text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#092936]  tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
                style={{ fontFamily: "Oswald, monospace" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {props.title}
            </motion.h1>
            <div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 m-5 place-items-center">
                    <ServiceCard icon={pic1} title={title[0]} description={desc[0]} duration={0.2} link={links[0]} />
                    <ServiceCard icon={pic2} title={title[1]} description={desc[1]} duration={0.3} link={links[1]} />
                    <ServiceCard icon={pic3} title={title[2]} description={desc[2]} duration={0.4} link={links[2]} />
                    <ServiceCard icon={pic4} title={title[3]} description={desc[3]} duration={0.5} link={links[3]} />
                    <ServiceCard icon={pic5} title={title[4]} description={desc[4]} duration={0.6} link={links[4]} />
                    <ServiceCard icon={pic6} title={title[5]} description={desc[5]} duration={0.7} link={links[5]} />
                </div>
                <motion.p className="flex items-center justify-center space-x-1 text-gray-600 text-center mt-5"
                    animate={{ y: [0, 2, 0] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <a href="/services" className="flex items-center gap-1 hover:underline">
                        <span>Show all Services</span>
                        <Icon
                            icon="mdi:chevron-double-right"
                            className="w-5 h-5"
                        />
                    </a>
                </motion.p>
            </div>
        </div>
    )
}

export default LandingServices