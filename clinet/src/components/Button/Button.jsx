import React from "react";

const Button = ({ type, className, children, onClick, style,disabled }) => {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
