import React from "react";
import "./style.css"

const Card = ({title, text, shop}) => {
    return (
        <div className="container" onClick={shop}>
            <h2 className="Title">{title}</h2>
            <p className="text">{text}</p>
        </div>
    )
}

export default Card;