import React from 'react'
import Service from './Service'
import PL from '../../assets/PL.png'
const PLOperations = () => {

  const title = "3PL Operations Management";
  const desc = "3PL (Third-Party Logistics) Operations Management involves outsourcing logistics activities like warehousing, order fulfillment, and shipping to external providers. Effective 3PL management ensures scalability, operational flexibility, and allows businesses to focus on core competencies.";
  const image = PL;
  const p = "helloooo";
  return (
    <div>
      <Service title = {title} desc = {desc} image = {image} p = {p} />
    </div>
  )
}

export default PLOperations