import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

const About = () => (
  <section className="container mx-auto p-8">
    <img 
      src="/images/headshot.jpg" 
      style={{ 
        borderRadius: "50%", 
        width: "20vw", 
        height: "20vw", 
        objectFit: "cover" 
      }} 
      alt="Profile Picture" 
    />
    <div style={{ height: '20px' }}></div> 

    <h2 className="text-3xl font-bold mb-4">Samantha Saak</h2>

    <p className="font-bold text-gray-600">
          Computer Science @ Cornell Engineering
          </p>

          <div style={{ height: '20px' }}></div> 

    <div 
          // style={{ 
          //   backgroundColor: "#f3f4f6", // Light gray background
          // }} 
          className="p-6 rounded-lg shadow-md"
        >
          <p className="text-gray-900">
      Hello! I am a self-driven undergraduate student at Cornell University pursuing a 
      Bachelor of Science in Computer Science with a minor in Robotics. I am passionate 
      about innovative human-centered technologies and innovative ways to assist daily life. 
      Recently, I conducted research into accessible interfaces for mobile manipulator robots 
      at the University of Massachusetts Lowell to create a novel connection between virtual 
      assistance and robotics that promotes user autonomy. I bring hands-on experience in 
      planning and developing larger software projects with a human interaction focus, 
      along with design, debugging, and team communication skills. 
    </p>
    </div>



    {/* <div 
        style={{ 
          backgroundColor: "#385c28", 
        }} 
        className="p-6 rounded-lg shadow-md"
      >
        <p className="text-sm text-center font-bold mb-4 m-1 text-white"> Computer Science @ Cornell Engineering
        </p>
      </div> */}
    

    
  </section>


);

export default About;