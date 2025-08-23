import React from 'react'
import Intro from './Intro'
import Recommendation from '../LandingComponents/Recommendation'
import Project from './Project.jsx'
import ridge from '../../assets/trustedby/ridge.pdf'
import TrustedBy from '../TrustedBy/TrustedBy.jsx'
import Contact from './Contact'
import LandingServices from '../AllServices/LandingServices.jsx'
import LandingExperience from '../AllExperience/LandingExperience'

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
  },
  // {
  //   name: "The Ridge",
  //   image: ridge,
  //   date: "10/02/2025"
  // }
]

const title = "My Services"
const Home = () => {
  return (
    <div>
      <Intro />
      blii
      <LandingServices title = {title}/>
      <LandingExperience/>
      <TrustedBy />
      <Project />
      <Recommendation recommend={recommend} />
      <Contact />
    </div>
  )
}
export default Home