import React from "react";
import "./style.css"

const Button = ({ call }) => {
  return (
    <button onClick={call}>Enviar...</button>
  );
};

export default Button;