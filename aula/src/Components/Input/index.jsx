import React from "react";
import "./style.css";

const Input = ({ onChange, text }) => {
  return (
    <>
      <div>
        <label>{text}</label>
        <input type="text" placeholder="Digitando..." onChange={onChange} />
      </div>
    </>
  );
};

export default Input;
