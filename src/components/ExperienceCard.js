import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import Button from "./ui/button";

const ExperienceCard = ({ jobTitle, orgName, date, details }) => (
  <div className="flex flex-col p-6 rounded-lg">
    {/* Optional spacer */}
    {/* <div style={{ height: '25px' }}></div> */}
    
    <div className="flex justify-between items-baseline">
      {/* Job Title */}
      <h3 className="text-3xl font-semibold">{jobTitle}</h3>
    </div>

    <div className="flex justify-between items-baseline">
      {/* School/Organization Name */}
      <h4 className="text-lg font-semibold">{orgName}</h4>
      <p className="text-sm text-gray-600">{date}</p>
    </div>

    {/* Optional spacer */}
    <div style={{ height: '8px' }}></div>

    {/* Job details (internship or research tasks) */}
    <ul className="list-disc" style={{ paddingLeft: '15px' }}>
        {details.map((detail, index) => (
            <li key={index}  className="mb-1 pl-4">{detail}</li>
        ))}
    </ul>
  </div>
);

export default ExperienceCard;
