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
])


function App() {
  
  return (
    <div>
        <RouterProvider router={router} />
      
    </div>

    
  )
}

export default App
