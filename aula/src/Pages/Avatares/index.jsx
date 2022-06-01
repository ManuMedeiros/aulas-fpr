import React, { useState } from "react";
import "./styles.css";

const Avatares = () => {
  const mock = [
    {
      id: 1,
      name: "teste1",
    },
    {
      id: 2,
      name: "teste1",
    },
    {
      id: 3,
      name: "teste1",
    },
    {
      id: 4,
      name: "teste1",
    },
  ];

  const [check, setCheck] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  const test = () => {
    setCheck(!check);
  };

  const handleSelectAll = (e) => {
    setCheckAll(!checkAll);
    setCheck(mock.map((li) => li.id));
    if (checkAll) {
      setCheck([]);
    }
  };
    
    
  return (
    <>
      {mock.map((item) => (
        <>
          <label class="container-test">
            {item.name}
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
        </>
      ))}
      <div onClick={handleSelectAll}>
        select all
      </div>
    </>
  );
};

export default Avatares;
