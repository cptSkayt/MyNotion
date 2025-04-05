import React from "react";
import "./Popup.css";
import TextButton from "./TextButton";

const Popup = function ({ info, closePopup, removeTask }) {   
    if (info.key === "info") {
        return (
            <div className={info.isOpen ? "main-popup" : "main-popup close"}>
                <div className="popup-content">
                    <div className="popup-title">{info.title}</div>
                    <div className="popup-text">{info.text !== undefined ? info.text : "Описание отсутствует"}</div>
                    <TextButton flag="remove" func={[() => removeTask(info), () => closePopup()]}>Удалить</TextButton>
                    <div className="close-button" onClick={closePopup}>X</div>
                </div>
            </div>
        )
    } else {
        const object = {};
        return (
            <div className={info.isOpen ? "main-popup" : "main-popup close"}>
                <div className="popup-content create">
                    <label htmlFor="create-input">
                        <h2 className="create-title">Введите задачу</h2>
                    </label>
                    <input id="create-input" type="text" onChange={(event) => (object.title = event.target.value)}/>

                    <label htmlFor="create-textarea">
                        <h2 className="create-title">Дополнительное описание</h2>
                    </label>
                    <textarea id="create-textarea" onChange={(event) => (object.text = event.target.value)}/>
                    <div className="close-button" onClick={closePopup}>X</div>
                </div>
            </div>
        )
    }
}

export default Popup