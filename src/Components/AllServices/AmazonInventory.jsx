import React from 'react'
import PL from '../../assets/PL.png'
import Service from './Service';

const AmazonInventory = () => {
  const title = "Amazon Inventory Reimbursements";
  const desc = "Amazon Inventory Reimbursements involve identifying and recovering lost, damaged, or misplaced inventory within Amazon’s fulfillment network. By regularly auditing inventory reports and submitting valid claims, sellers can recoup losses and maintain profitability.";
  const image = PL;
  const p = "helloooo";
  return (
     <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default AmazonInventory