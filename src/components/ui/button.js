import React from 'react';

// The Button component
const Button = ({ children, onClick, className, style, type = 'button' }) => {
  return (
    <button 
      className={`btn ${className}`} 
      onClick={onClick} 
      style={style} 
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;