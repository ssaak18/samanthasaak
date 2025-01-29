import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import Button from "./ui/button";

const ProjectCard = ({ title, image, description, link }) => (
  <Card className="w-full md:w-1/2 p-4">
    <img src={image} alt={title} style={{ border: '4px solid #2e4d1a' }} className="rounded-lg w-full object-cover mb-4" />
    <CardContent>
      <h3 className="text-3xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      {/* Conditionally render the button if a link is provided */}
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="rounded-lg"
          style={{ backgroundColor: "#2e4d1a", padding: "10px 15px" }} 
        >
          <button 
            style={{ margin: "10px" }} 
            className="text-center font-bold mb-4 m-1 text-white"
          >
            Learn More
          </button>
        </a>
      )}
    </CardContent>
  </Card>
);


export default ProjectCard;