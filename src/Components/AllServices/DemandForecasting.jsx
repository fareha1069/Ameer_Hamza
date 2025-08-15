import React from 'react'
import Service from './Service'
import PL from '../../assets/Services/Demand.jpg'
// import { image, title } from 'motion/dist/react-client'
const DemandForecasting = () => {
  const title =  "Seasonal Demand Forecasting"
  const desc = "I provide precise seasonal demand forecasting to help your business prepare for peak sales events without overstocking or running out of inventory. Using data-driven models, I can predict monthly and seasonal inventory requirements for platforms like Amazon, Shopify, and more—ensuring products are always available when customers need them."
  const image = PL
  const p = "This service includes analyzing sales history, market trends, and promotional calendars to create customized forecasts. By implementing these strategies, you can maintain optimal stock levels, reduce holding costs, and maximize sales during events like Prime Day, Black Friday, and holiday seasons."

  return (
    <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default DemandForecasting