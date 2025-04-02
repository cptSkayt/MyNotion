import React from "react";
import "./Popup.css";

const Popup = function ({ children, info }) {   
    return (
        <div className={info.isOpen ? "main-popup" : "main-popup close"}>
            
        </div>
    )
}

export default Popup