import React from "react";
import "./style.css";

const Links = ({ link, showLink, church }) => {
    return <>{showLink === true && <a href={link}>{church}</a>}</>;
};

export default Links;
