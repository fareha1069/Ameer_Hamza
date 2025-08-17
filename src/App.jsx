import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Routes , Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar  from './Components/LandingComponents/Navbar'
import Project from './Components/AllProjects/ProjectPage'
import Services from './Components/AllServices/Services'
import Home from './Components/LandingComponents/Home'
import Recommendation from './Components/LandingComponents/Recommendation'

import Contact from './Components/Contact/Contact'
import AmazonFba from './Components/AllServices/AmazonFba';
import AmazonInventory from './Components/AllServices/AmazonInventory';
import DTCSupplyChain from './Components/AllServices/DTCSupplyChain';
import DemandForecasting from './Components/AllServices/DemandForecasting';
import LogisticOperations from './Components/AllServices/LogisticOperations';
import OrderManagement from './Components/AllServices/OrderManagement';
import PLOperations from './Components/AllServices/PLOperations';
import ExperiencesPage from './Components/AllExperience/ExperiencesPage';
import Footer from './Components/LandingComponents/Footer';
import { Cv } from './Components/CV/Cv';
import DemandForecasting1 from './Components/AllProjects/DemandForecasting';
import PurchaseOrder from './Components/AllProjects/PurchaseOrder';
import AmazonListing from './Components/AllProjects/AmazonListing';
import AmazonReinstallment from './Components/AllProjects/AmazonReinstallment';
import Consultation from './Components/AllProjects/Consultation';
import AmazonInventory1 from './Components/AllProjects/AmazonInventory.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element :
      <div>
        <Navbar/>
        <Home />
        <Footer/>
      </div>

    },

     {
      path:"/services",
      element :
      <div>
        <Navbar/>
        <Services />
        <Footer/>
      </div>
    },

     {
      path:"/projects",
      element :
      <div>
        <Navbar/>
        <Project />
        <Footer/>
      </div>
    },

    {
      path:"/experience",
      element :
      <div>
        <Navbar/>
        <ExperiencesPage />
        <Footer/>
      </div>
    },

     {
      path:"/recommendations",
      element :  
      <div>
        <Navbar/>
        <Recommendation />
        <Footer/>
      </div>
    },

      {
      path:"/cv",
      element :
      <div>
        <Navbar/>
        <Cv/>
        <Footer/>
      </div>
    },
    {
      path:"/contact",
      element :
      <div>
        <Navbar/>
        <Contact />
        <Footer/>
      </div>
    },
    //services pages
    {
      path:"/amazonFba",
      element :
      <div>
        <Navbar/>
        <AmazonFba />
        <Footer/>
      </div>
    },
    {
      path:"/amazonInventory",
      element :
      <div>
        <Navbar/>
        <AmazonInventory />
        <Footer/>
      </div>
    },
    {
      path:"/demandForecasting",
      element :
      <div>
        <Navbar/>
        <DemandForecasting />
        <Footer/>
      </div>
    },
    {
      path:"/DTCSupplyChain",
      element :
      <div>
        <Navbar/>
        <DTCSupplyChain />
        <Footer/>
      </div>
    },
    {
      path:"/logisticOperations",
      element :
      <div>
        <Navbar/>
        <LogisticOperations />
        <Footer/>
      </div>
    },
    {
      path:"/orderManagement",
      element :
      <div>
        <Navbar/>
        <OrderManagement />
        <Footer/>
      </div>
    },
    {
      path:"/PlOperations",
      element :
      <div>
        <Navbar/>
        <PLOperations />
        <Footer/>
      </div>
    },
    {
      path: "/demand-forecasting",
      element:  
        <div>
          <Navbar />
          <DemandForecasting1 />
          <Footer />
        </div>
    },
    {
      path: "/purchase-order-management",
      element:  
        <div>
          <Navbar />
          <PurchaseOrder />
          <Footer />
        </div>
    },
    {
      path: "/amazon-listing-management",
      element:  
        <div>
          <Navbar />
          <AmazonListing />
          <Footer />
        </div>
    },
    {
      path: "/amazon-listing-reinstatement",
      element:  
        <div>
          <Navbar />
          <AmazonReinstallment />
          <Footer />
        </div>
    },
    {
      path: "/amazon-inventory-reconciliation-reimbursements",
      element:  
        <div>
          <Navbar />
          <AmazonInventory1 />
          <Footer />
        </div>
    },
    {
      path: "/consultation-3pl-prime-day-fba-shipment",
      element:  
        <div>
          <Navbar />
          <Consultation />
          <Footer />
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
