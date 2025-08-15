import React from 'react'
import Service from './Service'
import PL from '../../assets/Services/PL.png'
const PLOperations = () => {

  const title = "3PL Operations Management";
  const desc = "I provide comprehensive management of third-party logistics (3PL) operations to ensure that products move efficiently from storage to the customer’s hands. This involves identifying and onboarding reliable 3PL partners, negotiating cost-effective storage and fulfillment rates, and setting up efficient workflows for inventory handling. I coordinate inbound shipments, monitor stock levels in real time, and make sure that pick, pack, and ship processes are optimized for speed and accuracy.";
  const image = PL;
  const p = "A core part of my approach is maintaining close communication with 3PL providers to address issues quickly and keep operations running smoothly. I regularly review performance reports, order accuracy, and turnaround times to identify gaps and implement improvements. By streamlining processes, I help reduce fulfillment costs while maintaining high customer satisfaction. Whether managing direct-to-consumer orders, multi-channel fulfillment, or Amazon distribution, I ensure that every order is processed without delays and in line with service-level expectations.";
  return (
    <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default PLOperations