import React from "react";
import "./style.css";

const Input = ({ onChange }) => {
  return (
    <>
      <div>
        <label>Qual o melhor?</label>
        <input type="text" placeholder="Digitando..." onChange={onChange} />
      </div>
    </>
  );
};

export default Input;
