import React from 'react'
import Service from './Service'
import PL from '../../assets/PL.png'

const LogisticOperations = () => {

  const title = "Freight and Logistics Operations";
  const desc = "Freight and Logistics Operations focus on the movement, storage, and coordination of goods across the supply chain. It includes managing transportation modes, carrier selection, and delivery tracking to reduce transit times, lower costs, and improve customer delivery experiences.";
  const image = PL;
  const p = "helloooo";

  return (
     <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default LogisticOperations