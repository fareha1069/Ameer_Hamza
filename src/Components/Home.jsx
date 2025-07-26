import React from 'react'
import Intro from '../Components/Intro.jsx'
import CarouselSize from '../Components/CarouselSize.jsx'
import ServiceCard from './ServiceCard.jsx'
// import Bakwas from '../Components/Bakwas.jsx'
import pic1 from '../assets/logo1.png'
import pic2 from '../assets/logo2.png'
import pic3 from '../assets/logo3.png'
import pic4 from '../assets/logo4.png'
import Experience from '../Components/Experience'
import company1 from '../assets/compani1.jpg'
import company2 from '../assets/company2.jpg'
import company3 from '../assets/company3.jpg'

import { ImageIcon } from 'lucide-react'
// import { image } from 'motion/dist/react-client.js'

const title = [" Project Management", "3PL Operations Management" , "Amazon Seller Policy Conformance " , "Vendor Management"]
const desc = [
  "Planning, executing, and overseeing projects to meet goals on time and within budget and supply chain operations",
  "Efficient coordination and optimization of third-party logistics services to streamline supply chain operations",
  "Ensuring adherence to Amazon’s marketplace policies to maintain compliance, avoid penalties, and sustain seller account health.",
  "Streamlining the process of selecting, onboarding, and managing vendors to ensure efficient and cost-effective partnerships",
  "",
  ""
]

const experienceData = [
  {
    company: "Ridge",
    title: "Amazon Supply Chain Manager",
    date: "Oct 2022 - Present",
    description:
      "Spearheaded seasonal demand forecasting, boosting inventory accuracy across five global markets and key sales events Streamlined Amazon operations by managing ERP systems, onboarding AWD, and recovering $150K+ via inventory claimsEnhanced cross-functional coordination and reporting, raising the IPI score from 600 to 780 and driving smarter decisions",
    iconBg: "#facc15",
    imageIcon : company3
  },
   {
    company: "Hiker Hunger Outfitters",
    title: "Supply Chain Manager",
    date: "Aug 2024 - Jan 2025",
    description:
      "Developed demand forecasting tools, streamlined supplier coordination and 3PL onboarding, boosting IPI score and recovering $10K+ via Amazon claim reimbursements.",
    iconBg: "#60a5fa",
     imageIcon : company2
  },
  {
    company: "Manifest IND LLC",
    title: "Demand Planner and FBA Operations",
    date: "Jun 2022 - Dec 2023",
    description:
      "Forecasted inventory for Amazon & Shopify across two markets, launched 20+ products, and cut logistics costs via AWD onboarding.Improved IPI from 650 to 850, managed account health, and recovered $40K+ through claim resolution for inventory discrepancies.",
    iconBg: "#34d399",
     imageIcon : company1
  },
 
];



const Home = () => {
  return (
    <div>
      <Intro/>
      <div className='flex flex-col justify-center items-center mt-[5%] mb-[5%]'>
        {/* <p className='text-xl font-sm text-white  mb-5'>Strategic, data-driven, and efficiency-focused supply chain solutions for optimized end-to-end operations</p> */}
        <p className='text-4xl font-semibold text-[#092936]'>My Services</p>
         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10 place-items-center">
        <ServiceCard icon={pic1} title={title[0]} description={desc[0]} duration  = {0.2} />
        <ServiceCard icon={pic2} title={title[1]} description={desc[1]} duration  = {0.3} />
        <ServiceCard icon={pic3} title={title[2]} description={desc[2]} duration  = {0.4} />
        <ServiceCard icon={pic4} title={title[3]} description={desc[3]} duration  = {0.5} />
        <ServiceCard icon={pic1} title={title[0]} description={desc[0]} duration  = {0.6} />
        <ServiceCard icon={pic2} title={title[1]} description={desc[1]} duration  = {0.7} />
      </div>
      </div>
       <Experience experiences={experienceData} />

      <div>
        Hello
      </div>
      {/* <CarouselSize/> */}
    </div>
  )
}

export default Home