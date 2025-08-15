import React from 'react'
import bg from "../../assets/bg.png";
import { motion as Motion } from 'motion/react'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div
  className="flex flex-row bg-[#08374A] h-[35vh] bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>
  <Motion.div
    className="p-5 flex flex-col gap-4 mt-4 w-[70vw] md:w-[50vw] lg:w-[40vw] text-white"
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {/* Facebook
    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center">
      <Icon icon="logos:facebook" width="30" height="30" className="mr-2" />
      <span>Ameer Hamza</span>
    </a> */}

    {/* Instagram */}
    {/* <a href="https://www.instagram.com/ameer_hamza_ilyas/" target="_blank" rel="noreferrer" className="flex items-center">
      <Icon icon="skill-icons:instagram" width="30" height="30" className="mr-2" />
      <span>Ameer Hamza</span>
    </a> */}

    {/* Phone */}
    {/* <a href="tel:+92305540880" target="_blank" rel="noreferrer" className="flex items-center">
      <Icon icon="ph:phone" width="30" height="30" className="mr-2" />
      <span>+92 305540880</span>
    </a> */}

    {/* WhatsApp */}
    <a href="https://wa.me/92305540880" target="_blank" rel="noreferrer" className="flex items-center">
      <Icon icon="logos:whatsapp-icon" width="30" height="30" className="mr-2" />
      <span>+92 305540880</span>
    </a>

    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/ameer-hamza-ilyas/" target="_blank" rel="noreferrer" className="flex items-center">
      <Icon icon="logos:linkedin-icon" width="30" height="30" className="mr-2" />
      <span>Ameer Hamza</span>
    </a>

    {/* Upwork */}
    <a href="https://www.upwork.com/freelancers/yourusername" target="_blank" rel="noreferrer" className="flex items-center">
      <Icon icon="simple-icons:upwork" width="30" height="30" className="mr-2 text-green-600" />
      <span>Hamza</span>
    </a>

    {/* Gmail */}
    <a href="mailto:hamzamalik246810@gmail.com" className="flex items-center">
      <Icon icon="logos:google-gmail" width="30" height="30" className="mr-2" />
      <span>hamzamalik246810@gmail.com</span>
    </a>

  </Motion.div>

  <Motion.div
    className="p-5 flex flex-col gap-4 mt-4 w-[70vw] md:w-[50vw] lg:w-[40vw] text-white border-l-2 border-gray-400"
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h1>Quick Links</h1>
    <Link to="/" ><p>Home</p></Link>
    <Link to="/services" ><p>Services</p></Link>
    <Link to="/projects" ><p>Projects</p></Link>
    <Link to="/experience" ><p>Experience</p></Link>

  </Motion.div>
  
</div>

  )
}

export default Footer
