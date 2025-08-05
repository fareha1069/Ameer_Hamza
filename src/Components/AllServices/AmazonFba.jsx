import React from 'react'
import PL from '../../assets/PL.png'
import Service from './Service';

const AmazonFba = () => {

  const title = "Amazon FBA/AWD Inventory Management";
  const desc = "Amazon FBA/AWD Inventory Management ensures that stock levels are optimized within Amazon’s fulfillment (FBA) and warehousing (AWD) systems. It helps sellers meet demand without overstocking or facing storage penalties, ensuring timely deliveries and cost efficiency.";
  const image = PL;
  const p = "helloooo";

  return (
    <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default AmazonFba