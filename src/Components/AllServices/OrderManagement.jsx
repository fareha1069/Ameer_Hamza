import React from 'react'
import Service from './Service'
import PL from '../../assets/PL.png'

const OrderManagement = () => {
  const title = "Procurement Order Management";
  const desc = "Procurement Order Management streamlines the process of ordering, tracking, and managing goods from suppliers. It ensures timely purchases, cost control, and alignment with production or sales forecasts. This improves supplier relations, reduces delays, and enhances supply chain efficiency.";
  const image = PL;
  const p = "helloooo";
  return (
    <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default OrderManagement