import React from "react";
import { NavLink } from 'react-router-dom'; // Import NavLink


const Navbar = () => (
  <nav className="text-white p-4 shadow-lg sticky top-0 z-50" style={{ backgroundColor: "rgb(145, 184, 105)" }}>
  <div className="container mx-auto flex justify-between">
    {/* Updated Portfolio text to be a link to About */}
    <NavLink to="/" className="text-xl font-bold hover:underline">
      Samantha Saak
    </NavLink>
    <div className="flex space-x-4">
      <NavLink to="/projects" className={({ isActive }) => isActive ? "underline" : ""}>Projects</NavLink>
      <NavLink to="/experience" className={({ isActive }) => isActive ? "underline" : ""}>Experience</NavLink>
    </div>
  </div>
</nav>
);

export default Navbar;