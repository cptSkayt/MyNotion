import React from "react";
import './TextButton.css';

const TextButton = function ({children, openPopup}) {
    return (
        <button className="text-button" onClick={() => openPopup({key: "createTask"})}>
            {children}
        </button>
    )
}

export default TextButton