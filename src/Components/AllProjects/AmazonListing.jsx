import React from "react";
import ProjectGen from "./ProjectGen";
import img1 from "../../assets/Projects/ListingM/img1.png";
import img2 from "../../assets/Projects/ListingM/img2.png";
import img3 from "../../assets/Projects/ListingM/img3.png";
import img4 from "../../assets/Projects/ListingM/img4.png";
import img5 from "../../assets/Projects/ListingM/img5.png";
import img6 from "../../assets/Projects/ListingM/img6.png";
import img7 from "../../assets/Projects/ListingM/img7.png";
import img8 from "../../assets/Projects/ListingM/img8.png";


const title = "Amazon Listing Management"
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
    <ProjectGen title={title} skills={skills} responsibilities={responsibilities} project={project} />
  );
};
export default AmazonListing;
