import React from 'react';
import classes from "./button.module.css";

const CheckButton = ({ text, onClick, className }) => {
  return (
    <button className={`${classes.custombutton} ${className}`} onClick={onClick}>
      {`${text}`} 
    </button>
  );
};

export default CheckButton;