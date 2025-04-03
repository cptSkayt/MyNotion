import React from "react";
import "./Popup.css";

const Popup = function ({ children, info, closePopup, removeTask }) {   
    return (
        <div className={info.isOpen ? "main-popup" : "main-popup close"}>
            <div className="popup-content">
                <div className="popup-title">{info.title}</div>
                <div className="popup-text">{info.text !== undefined ? info.text : "Описание отсутствует"}</div>
                <button className="remove-button" onClick={() => {
                    removeTask(info);
                    closePopup();
                }}>Удалить</button>
                <div className="close-button" onClick={closePopup}>X</div>
            </div>
        </div>
    )
}

export default Popup