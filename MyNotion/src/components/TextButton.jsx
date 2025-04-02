import React from "react";
import './TextButton.css';

const TextButton = function ({children}) {
    return (
        <button className="text-button">
            {children}
        </button>
    )
}

export default TextButton