import React from "react";
import { motion as Motion } from "motion/react";
import { Icon } from "@iconify/react";
import bg from "../../assets/Intro/bg.png";
import ProjectImages from "./ProjectImages";
import img1 from "../../assets/Projects/ListingM/img1.png";
import img2 from "../../assets/Projects/ListingM/img2.png";
import img3 from "../../assets/Projects/ListingM/img3.png";
import img4 from "../../assets/Projects/ListingM/img4.png";
import img5 from "../../assets/Projects/ListingM/img5.png";
import img6 from "../../assets/Projects/ListingM/img6.png";
import img7 from "../../assets/Projects/ListingM/img7.png";
import img8 from "../../assets/Projects/ListingM/img8.png";

const skills = [
  "Amazon Listing",
  "Amazon Private Label",
  "Amazon Listing Optimization",
  "Amazon FBA",
  "Amazon",
  "Ecommerce",
  "Product Review"
];


const responsibilities = [
  "Create and optimize Amazon product listings by crafting compelling titles, bullet points, descriptions, and backend keywords to maximize visibility and conversion rates.",
  "Develop private label product strategies by conducting in-depth market research, competitor benchmarking, and supplier negotiations to build strong and profitable product lines.",
  "Implement Amazon SEO best practices and advertising campaigns (PPC) to drive traffic, improve organic rankings, and increase sales performance across multiple categories.",
  "Oversee Amazon FBA operations by planning inbound shipments, monitoring inventory levels, and ensuring efficient stock replenishment to maintain consistent product availability.",
  "Design and manage Enhanced Brand Content (A+ Content) including product visuals, infographics, and brand stories to strengthen customer engagement and trust.",
  "Track customer reviews and feedback, implement review generation strategies within Amazon’s policies, and resolve post-purchase issues to maintain a positive brand reputation.",
  "Collaborate with cross-functional teams including marketing, logistics, and finance to align ecommerce strategies, optimize operations, and achieve overall business growth."
];


const project = {
  heading: "Amazon Listing Creation & Optimization Highlights",
  desc: "Below are some of the key projects showcasing my expertise in Amazon listing creation, optimization, and A+ content management. These efforts demonstrate hands-on experience with product launches, private label branding, and enhancing customer engagement through well-crafted product detail pages.",
  items: [
    {
      text: "Created 120 ring listings categorized by color and size.",
      image: img1,
    },
    {
      text: "Successfully created all listings for the entire new brand.",
      image: img2,
    },
    {
      text: "Crafted listings for Hayvenhust wooden wallets.",
      image: img3,
    },
    {
      text: "Crafted listings for Ridge watches.",
      image: img4,
    },
    {
      text: "Created listings for all these multitools.",
      image: img5,
    },
    {
      text: "Uploaded Premium A+ content for Ridge wallets.",
      image: img6,
    },
    {
      text: "Combined wallet listings to merge reviews as per client's request.",
      image: img7,
    },
    {
      text: "Uploaded Premium A+ content for Ridge Pens.",
      image: img8,
    },
  ],
};


const AmazonListing = () => {
  return (
    <div>
      <Motion.div
        className="flex items-center justify-center overflow-hidden p-4 pt-5 pb-5 md:p-10 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col md:flex-row gap-10 w-[90vw]">
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Title */}

            <Motion.h1
              className="title text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
              style={{ fontFamily: "Oswald, monospace" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Amazon Listing Management
            </Motion.h1>
            <p className="text-[#092936] text-base leading-relaxed">
              As a dedicated professional, I take pride in managing the Amazon
              listings. My responsibilities encompass the end-to-end process,
              from listing creation and optimization to monitoring performance
              and ensuring accurate product information. By meticulously
              crafting listings, optimizing , and enhancing product images, I've
              improved the conversion rates. My hands-on approach extends to
              managing inventory, handling customer reviews, and swiftly
              addressing any issues that arise. Through data-driven strategies
              and continuous monitoring, I've consistently maintained
              high-quality listings that resonate with customers and contribute
              to overall business success.
            </p>

            <div className="w-full">
              <h3 className="text-lg font-semibold text-[#092936] mb-3">
                Top Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills?.map((skill, index) => (
                  <Motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-[#005851] text-white rounded-full shadow-inner group-hover:scale-110 transition-transform duration-200">
                      <Icon icon="lucide:zap" className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#092936] font-medium">
                      {skill}
                    </span>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-2/3 w-full space-y-8">
            {/* Responsibilities */}
            <div>
              <h3 className="text-xl font-semibold text-[#092936] mb-6">
                Key Responsibilities
              </h3>
              <div className="relative border-l-2 border-dashed border-[#005851] ml-3 space-y-6">
                {responsibilities?.map((item, idx) => (
                  <Motion.div
                    key={idx}
                    className="relative pl-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <span className="absolute -left-3 top-1 w-4 h-4 rounded-full bg-[#005851] shadow-md border-2 border-white"></span>
                    <div className="flex items-start gap-3">
                      <Icon
                        icon="lucide:check-circle"
                        className="w-5 h-5 mt-0.5 text-[#005851] flex-shrink-0"
                      />
                      <p className="text-[#092936] text-base leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Motion.div>

      <ProjectImages project={project} />

      {/* ContactDiv */}
      
    </div>
  );
};
export default AmazonListing;
