import React from "react";
import "./style.css"

const Card = ({title, type, weight, heigth}) => {
    return (
        <div className="container">
            <h2 className="Title">{title}</h2>
            <p className="type">{type}</p>
            <p className="text">{weight}</p>
            <p className="text">{heigth}</p>
        </div>
    )
}

export default Card;