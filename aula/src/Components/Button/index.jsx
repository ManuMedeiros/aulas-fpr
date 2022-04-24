import React from "react";
import "./style.css"

const Button = ({ call, title }) => {
  return (
    <button onClick={call}>{title}</button>
  );
};

export default Button;