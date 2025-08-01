import React from 'react'
import {motion as Motion} from 'motion/react'
import Intro from '../Components/Intro.jsx'
import Recommendation from './Recommendation.jsx'
import ServiceCard from './ServiceCard.jsx'
import Project from './Project.jsx'
import Contactdiv from './Contactdiv.jsx'
import Footer from './Footer.jsx'
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
  "Ensuring adherence to Amazon’s marketplace policies to maintain compliance, avoid penalties, and su.",
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
      "Spearheaded seasonal demand forecasting, boosting inventory accuracy across five global markets and key sales events Streamlined Amazon operations by managing ERP systems",
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
      "Forecasted inventory for Amazon & Shopify across two markets, launched 20+ products, and cut logistics costs via AWD onboarding.",
    iconBg: "#34d399",
     imageIcon : company1
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

const recommend = [
  {
    name: "Michael Hartridge",
    text: "Ameer is a highly skilled and dedicated professional who consistently delivers outstanding results. His ability to problem solve, budget management and decision making sets him apart, making him an invaluable asset to any team. I had the pleasure of working with Mr. Hamza as he managed my Amazon Supply Chain for Kanebilt, and have always been impressed by the work ethic, creativity and leadership. I highly recommend Ameer to anyone looking for a talented and reliable manager to oversee there Amazon Supply Chain.",
    date: "30/01/2025"
  }, 
  {
    name: "Umar Akram",
    text: "Ameer is really good when it comes to inventory planning, especially seasonal forecasting. He accurately tracks shipment receipts, works with forwarders, and files reimbursement claims on time when needed. Highly recommended!",
    date: "29/01/2025"
  }, 
  {
    name: "Kathryn Hampton",
    text: "Ameer is a team player, he is great with managing Amazon inventory and working with operations teams to ensure Amazon stock levels are maintained to meet business demand. He is quick to solve issues and easy to communicate with",
    date: "07/01/2025"
  },
  {
    name: "Emilia Calderon Raue",
    text: "Ameer it’s great with anything related to Amazon. Full of knowledge and willing to explain everything! I would highly recommend Ameer!",
    date: "18/08/2024"
  }
]

const Home = () => {
  return (
    <div>
      <Intro/>
      <div className='flex flex-col justify-center items-center mt-[5%] mb-[5%]'>
        {/* <p className='text-xl font-sm text-white  mb-5'>Strategic, data-driven, and efficiency-focused supply chain solutions for optimized end-to-end operations</p> */}
        
        {/* <p className='text-4xl font-semibold text-[#092936]'>My Services</p> */}
         
         <Motion.h1
        className="title text-4xl md:text-5xl lg:text-6xl font-bold text-[#092936]  tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        SERVICES
      </Motion.h1>
         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-5 place-items-center">
        <ServiceCard icon={pic1} title={title[0]} description={desc[0]} duration  = {0.2} />
        <ServiceCard icon={pic2} title={title[1]} description={desc[1]} duration  = {0.3} />
        <ServiceCard icon={pic3} title={title[2]} description={desc[2]} duration  = {0.4} />
        <ServiceCard icon={pic4} title={title[3]} description={desc[3]} duration  = {0.5} />
        <ServiceCard icon={pic1} title={title[0]} description={desc[0]} duration  = {0.6} />
        <ServiceCard icon={pic2} title={title[1]} description={desc[1]} duration  = {0.7} />
      </div>
      </div>
       <Experience experiences={experienceData} />
        
        <Project/>
        <Recommendation recommend={recommend}/>

        <Contactdiv/> 

        <Footer/>

    </div>
  )
}

export default Home