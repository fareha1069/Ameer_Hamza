import React from "react";
import bg from "../../assets/Intro/bg.png";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="flex flex-col justify-between bg-[#08374A] h-[35vh] text-sm bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Top Row (Contacts + Quick Links) */}
      <div className="flex flex-row items-start justify-around flex-1 mt-1 px-5 pt-5">
        {/* Contact Section */}
        <Motion.div
          className=" flex flex-col gap-3 w-[80vw] sm:w-[40vw] text-white"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <a href="https://wa.me/92305540880" target="_blank" rel="noreferrer" className="flex items-center">
            <Icon icon="logos:whatsapp-icon" width="25" height="25" className="mr-2" />
            <span>+92 305540880</span>
          </a>
          <a href="https://www.linkedin.com/in/ameer-hamza-ilyas/" target="_blank" rel="noreferrer" className="flex items-center">
            <Icon icon="logos:linkedin-icon" width="25" height="25" className="mr-2" />
            <span>Ameer Hamza</span>
          </a>
          <a href="https://www.upwork.com/freelancers/yourusername" target="_blank" rel="noreferrer" className="flex items-center">
            <Icon icon="simple-icons:upwork" width="25" height="25" className="mr-2 text-green-600" />
            <span>Hamza</span>
          </a>
          <a href="mailto:hamzamalik246810@gmail.com" className="flex items-center">
            <Icon icon="logos:google-gmail" width="25" height="25" className="mr-2" />
            <span>hamzamalik246810@gmail.com</span>
          </a>
        </Motion.div>

        {/* Quick Links Section */}
        <Motion.div
          className="px-5 hidden sm:flex flex-col justify-start gap-4 w-[40vw] text-white border-l-2 border-gray-400"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-semibold text-lg">Quick Links</h1>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-3">
              <Link to="/"><p>Home</p></Link>
              <Link to="/services"><p>Services</p></Link>
              <Link to="/projects"><p>Projects</p></Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/experience"><p>Experience</p></Link>
              <Link to="/cv"><p>CV</p></Link>
              <Link to="/contact"><p>Contact</p></Link>
            </div>
          </div>
        </Motion.div>
      </div>

      {/* Bottom Credit Row */}
      <div className="border-t border-gray-500 py-2">
        <p className="text-base text-center text-white">
          Developed by{" "}
          <a href="https://www.upwork.com/freelancers/~0108560147dde16c96" className="font-semibold text-lg" style={{ fontFamily: "Oswald, monospace" }}>
            Fareha Ilyas
          </a>{" "}
          and{" "}
          <a href="https://www.upwork.com/freelancers/~012c4017169ba24b43" className="font-semibold text-lg" style={{ fontFamily: "Oswald, monospace" }}>
            Aneeba Waseem
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;