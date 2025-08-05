import React from 'react'
import Service from './Service'
import PL from '../../assets/PL.png'
const DTCSupplyChain = () => {
  const title = "DTC Supply Chain Management";
  const desc = "DTC (Direct-to-Consumer) Supply Chain Management handles the end-to-end logistics of delivering products directly from manufacturers or brands to customers. It emphasizes speed, accuracy, and customer experience while managing inventory, fulfillment, and returns.";
  const image = PL;
  const p = "helloooo";
  return (
     <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default DTCSupplyChain