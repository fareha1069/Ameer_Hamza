import React from 'react'
import PL from '../../assets/Services/AmazonFba.png'
import Service from './Service';

const AmazonFba = () => {

  const title = "Amazon FBA/AWD Inventory Management";
  const desc = "I provide end-to-end Amazon FBA and AWD inventory management services designed to keep your products in stock, optimize storage costs, and maintain operational efficiency. This includes forecasting demand for multiple markets, creating replenishment plans, and ensuring smooth product movement between suppliers, Amazon fulfillment centers, and AWD warehouses. By carefully monitoring inventory levels, I help avoid costly stockouts and overstocking situations, which directly impacts sales performance and profitability.";
  const image = PL;
  const p = "My approach integrates advanced tracking tools, ERP system optimization, and data-driven decision-making to maintain accurate, real-time inventory visibility. I coordinate closely with suppliers, logistics providers, and Amazon teams to ensure products arrive on time, meet quality standards, and are distributed efficiently. Whether it’s onboarding AWD to eliminate manual processes or using Amazon’s IPI score to measure and improve account health, I bring a structured and proactive method that keeps inventory flowing without interruptions. This level of precision allows sellers to focus on growth while I handle the complexity of FBA and AWD management.";

  return (
    <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default AmazonFba