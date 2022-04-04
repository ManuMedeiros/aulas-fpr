import React from "react";
import "./style.css"

const Card = ({title, text, anuncio}) => {
    return (
        <div className="container">
            <h2 className="Title">{title}</h2>
            {anuncio && <p className="text">{text}</p>}
        </div>
    )
}

export default Card;