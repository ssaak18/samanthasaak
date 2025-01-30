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

    <h2 className="text-3xl font-bold mb-4 text-black">Hi, I'm Sammy</h2>

    <p className="font-bold text-gray-600">
          Computer Science @ Cornell Engineering
          </p>

    <div style={{ height: '20px' }}></div> 

   
          <p className="text-gray-900">
      I am a self-driven undergraduate student at Cornell University pursuing a 
      Bachelor of Science in Computer Science with a minor in Robotics. I am passionate 
      about innovative human-centered technologies and innovative ways to assist daily life. 
      Recently, I conducted research into accessible interfaces for mobile manipulator robots 
      at the University of Massachusetts Lowell to create a novel connection between virtual 
      assistance and robotics that promotes user autonomy. I bring hands-on experience in 
      planning and developing software projects with a human interaction focus, 
      along with design, debugging, and team communication skills. 
    </p>
    <div style={{ height: '10px' }}></div> 
    <p className="text-gray-900">
    In my spare time, I enjoy reading (ask me for book recommendations!), photography, and taking care of my plants.
    </p>

    
    <div style={{ height: '20px' }}></div> 

    <div className="flex justify-center mt-8 space-x-6">
      {/* Email Icon Button */}
      <a href="mailto:sls552@cornell.edu" className="flex items-center justify-center">
        <img 
          src="/images/email.png" 
          alt="Email" 
          style={{ width: '40px', height: '40px', margin: '5px'}} 
          className="w-10 h-10 hover:opacity-80 cursor-pointer" 
        />
      </a>

      {/* LinkedIn Icon Button */}
      <a href="https://www.linkedin.com/in/samantha-saak/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        <img 
          src="/images/linkedin.png" 
          alt="LinkedIn" 
          style={{ width: '40px', height: '40px', margin: '5px'}} 
          className="w-10 h-10 hover:opacity-80 cursor-pointer" 
        />
      </a>

      {/* GitHub Icon Button */}
      <a href="https://github.com/ssaak18" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        <img 
          src="/images/github.png" 
          alt="GitHub" 
          style={{ width: '40px', height: '40px', margin: '5px'}} 
          className="w-10 h-10 hover:opacity-80 cursor-pointer" 
        />
      </a>
    </div>

    
  </section>


);

export default About;