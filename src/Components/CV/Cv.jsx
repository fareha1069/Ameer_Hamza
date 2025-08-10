import React from 'react'
// import Cv from './Education'
// import Education from './EducationSection'
import Certifications from './Certifications'
import { motion as Motion } from 'motion/react'
import bg from '../../assets/bg.png'
import EducationSection from './EducationSection'

export const Cv = () => {
  return (
    <Motion.div
      className="flex flex-wrap justify-center items-center gap-4 relative overflow-hidden py-12 w-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <EducationSection />
      {/* <Certifications /> */}
    </Motion.div>
  )
}
