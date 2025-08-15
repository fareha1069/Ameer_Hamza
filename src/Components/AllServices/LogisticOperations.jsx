import React from 'react'
import Service from './Service'
import PL from '../../assets/PL.png'

const LogisticOperations = () => {

  const title = "Freight and Logistics Operations";
  const desc = "I manage freight and logistics operations with a focus on cost efficiency, speed, and reliability. From selecting the most cost-effective freight options for DDP shipments to coordinating with carriers, 3PL providers, and Amazon fulfillment centers, every detail is handled to ensure seamless product movement. I oversee all stages of transportation — from supplier pickup to customs clearance and final delivery — to maintain a consistent supply chain flow.";
  const image = PL;
  const p = "By leveraging strong relationships with freight partners and closely monitoring shipment timelines, I proactively address potential delays, reroute shipments when necessary, and ensure compliance with all import/export regulations. My approach reduces lead times, minimizes unnecessary costs, and improves overall delivery performance. Whether it’s managing international shipments or optimizing domestic logistics, I provide businesses with reliable, scalable solutions that keep inventory where it’s needed, when it’s needed.";

  return (
     <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default LogisticOperations