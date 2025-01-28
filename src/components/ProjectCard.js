import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import Button from "./ui/button";

const ProjectCard = ({ title, image, description, link }) => (
    <Card className="w-full md:w-1/3 p-4">
      <img src={image} alt={title} className="rounded-lg w-full h-48 object-cover mb-4" />
      <CardContent>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <Button as="a" href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </Button>
        )}
      </CardContent>
    </Card>
  );

export default ProjectCard;