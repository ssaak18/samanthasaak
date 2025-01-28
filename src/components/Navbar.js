import React from "react";
import { NavLink } from 'react-router-dom'; // Import NavLink


const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 shadow-lg sticky top-0 z-50">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <div className="flex space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>About</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? "underline" : ""}>Experience</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "underline" : ""}>Projects</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;