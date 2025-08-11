import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Routes , Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar  from './Components/LandingComponents/Navbar'
import Project from './Components/AllProjects/Project'
import Services from './Components/AllServices/Services'
import Home from './Components/LandingComponents/Home'
import Recommendation from './Components/LandingComponents/Recommendation'
import Certifications from './Components/CV/Certifications'
import Education from './Components/CV/EducationSection'
import Contact from './Components/Contact/Contact'
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
import ExperiencesPage from './Components/AllExperience/ExperiencesPage';
import Footer from './Components/LandingComponents/Footer';
import { Cv } from './Components/CV/Cv';

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
      path:"/project",
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

])


function App() {
  
  return (
    <div>
        <RouterProvider router={router} />
        
    </div>

    
  )
}

export default App
