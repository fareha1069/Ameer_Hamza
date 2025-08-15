import React from 'react'
import PL from '../../assets/PL.png'
import Service from './Service';

const AmazonInventory = () => {
  const title = "Amazon Inventory Reimbursements";
  const desc = "I specialize in managing and recovering funds tied up in Amazon inventory discrepancies, ensuring that businesses reclaim every dollar owed to them. This involves closely monitoring inventory reports to detect issues such as short-received shipments, lost or damaged stock, and incorrect Amazon fees. By filing precise and well-documented reimbursement claims, I ensure that cases are resolved quickly and in your favor.";
  const image = PL;
  const p = "My process includes reconciling purchase orders against Amazon’s fulfillment center records, maintaining detailed documentation for every claim, and proactively following up with Amazon support teams to avoid delays. Over time, this systematic approach not only recovers significant amounts of money but also helps identify recurring issues that can be addressed to prevent future losses. By partnering with me for inventory reimbursement management, businesses can protect their margins, improve cash flow, and maintain healthier account operations without getting bogged down in Amazon’s complex case process.";
  return (
     <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default AmazonInventory