import React from 'react'
import Service from './Service'
import PL from '../../assets/PL.png'

const OrderManagement = () => {
  const title = "Procurement Order Management";
  const desc = "I provide comprehensive procurement order management services designed to keep your supply chain efficient, cost-effective, and stress-free. From identifying and sourcing reliable suppliers to negotiating favorable pricing and terms, I handle the entire process with precision. I ensure that purchase orders are placed accurately, aligned with demand forecasts, and compliant with your quality standards.";
  const image = PL;
  const p = "I coordinate production timelines, track shipments, and resolve any potential delays or discrepancies before they impact operations. By streamlining procurement workflows and strengthening supplier relationships, I help businesses reduce costs, maintain consistent stock availability, and improve overall operational efficiency across both e-commerce and retail channels.";
  return (
    <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default OrderManagement