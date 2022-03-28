import React from "react";
import "./style.css"

const Card = ({title, text}) => {
    return (
        <div className="container">
            <h2 className="Title">{title}</h2>
            <p className="text">{text}</p>
        </div>
    )
}

export default Card;