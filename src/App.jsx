import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Routes , Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar  from './Components/Navbar'
import Project from './Components/Project'
import Services from './Components/Services'
import Home from './Components/Home'
import Experience from './Components/Experieence'
import Recommendation from './Components/Recommendation'
import Certifications from './Components/Certifications'
import Education from './Components/Education'
import Contact from './Components/Contact'
// import Servicediv from './Components/Servicediv'
import { color, motion, useScroll } from "motion/react"
import { div } from 'motion/react-client';
import AmazonFba from './Components/AllServices/AmazonFba';
import AmazonInventory from './Components/AllServices/AmazonInventory';
import DTCSupplyChain from './Components/AllServices/DTCSupplyChain';
import DemandForecasting from './Components/AllServices/DemandForecasting';
import LogisticOperations from './Components/AllServices/LogisticOperations';
import OrderManagement from './Components/AllServices/OrderManagement';
import PLOperations from './Components/AllServices/PLOperations';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element : 
      <div>
        <Navbar/>
        <Home />
      </div>

    },

     {
      path:"/services",
      element :  
      <div>
        <Navbar/>
        <Services />
      </div>
    },

     {
      path:"/project",
      element :  
      <div>
        <Navbar/>
        <Project />
      </div>
    },

    {
      path:"/experience",
      element :  
      <div>
        <Navbar/>
        <Experience />
      </div>
    },

     {
      path:"/recommendations",
      element :  
      <div>
        <Navbar/>
        <Recommendation />
      </div>
    },

      {
      path:"/certifications",
      element :  
      <div>
        <Navbar/>
        <Certifications />
      </div>
    },

    {
      path:"/education",
      element :  
      <div>
        <Navbar/>
        <Education />
      </div>
    },

    {
      path:"/contact",
      element :
      <div>
        <Navbar/>
        <Contact />
      </div>
    },
    //services pages
    {
      path:"/amazonFba",
      element :
      <div>
        <Navbar/>
        <AmazonFba />
      </div>
    },
    {
      path:"/amazonInventory",
      element :
      <div>
        <Navbar/>
        <AmazonInventory />
      </div>
    },
    {
      path:"/demandForecasting",
      element :
      <div>
        <Navbar/>
        <DemandForecasting />
      </div>
    },
    {
      path:"/DTCSupplyChain",
      element :
      <div>
        <Navbar/>
        <DTCSupplyChain />
      </div>
    },
    {
      path:"/logisticOperations",
      element :
      <div>
        <Navbar/>
        <LogisticOperations />
      </div>
    },
    {
      path:"/orderManagement",
      element :
      <div>
        <Navbar/>
        <OrderManagement />
      </div>
    },
    {
      path:"/PlOperations",
      element :
      <div>
        <Navbar/>
        <PLOperations />
      </div>
    },

])


function App() {
  
  return (
    <div>
        <RouterProvider router={router} />
      
    </div>

    
  )
}

export default App
