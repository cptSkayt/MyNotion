import React from "react";
import './TextButton.css';

const TextButton = function ({ flag, children, openPopup, func}) {
    return (
        <button className={"text-button" + " " + flag} onClick={
            () => {
                if (openPopup !== undefined) {
                    openPopup({key: "createTask"});
                } 
                if (func !== undefined) {
                    if (Array.isArray(func)) {
                        func.forEach((item) => item());
                    } else {
                        func();
                    }
                }
            }
        }>
            {children}
        </button>
    )
}

export default TextButton