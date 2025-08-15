import React from 'react'
import Service from './Service'
import PL from '../../assets/Services/Demand.jpg'
// import { image, title } from 'motion/dist/react-client'
const DemandForecasting = () => {
  const title =  "Seasonal Demand Forecasting"
  const desc = "Seasonal Demand Forecasting helps businesses anticipate fluctuations in customer demand that occur due to predictable seasonal patterns, such as holidays, weather changes, or school schedules. By analyzing historical data and identifying recurring trends, companies can make informed decisions on inventory management, workforce planning, and marketing campaigns. This reduces the risk of stockouts or overstocking, improves customer satisfaction, and enhances overall operational efficiency."
  const image = PL
  const p = "helloooo"

  return (
    <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default DemandForecasting