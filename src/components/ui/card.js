// src/components/ui/card.js
import React from 'react';

// The Card component
const Card = ({ children, className, style }) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

// The CardContent component to display inside the Card
const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

export { Card, CardContent };