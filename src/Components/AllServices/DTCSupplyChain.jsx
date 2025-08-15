import React from 'react'
import Service from './Service'
import PL from '../../assets/PL.png'
const DTCSupplyChain = () => {
  const title = "DTC Supply Chain Management";
  const desc = "I offer comprehensive Direct-to-Consumer (DTC) supply chain management solutions that ensure seamless product delivery from your warehouse to your customer’s doorstep. This includes demand forecasting, order fulfillment optimization, and inventory tracking across eCommerce platforms such as Shopify and Amazon. By leveraging data-driven forecasting models, I help maintain the right stock levels, reduce fulfillment delays, and keep operational costs under control.";
  const image = PL;
  const p = "My process also includes vendor coordination, packaging and quality inspections, and partnering with reliable logistics providers or 3PLs to ensure fast and cost-effective shipping. I specialize in identifying opportunities to streamline DTC operations, such as replacing high-cost fulfillment solutions with more efficient local 3PLs—cutting fulfillment expenses by as much as 25%. From managing seasonal peaks to ensuring smooth product launches, I focus on creating a supply chain that supports customer satisfaction, brand reputation, and long-term profitability.";
  return (
     <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default DTCSupplyChain