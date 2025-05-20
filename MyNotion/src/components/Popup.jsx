import React from "react";
import { useRef } from "react";
import "./Popup.css";
import TextButton from "./TextButton";

const Popup = function ({ info, closePopup, removeTask, addTask }) {   
    if (info.key === "info") {
        return (
            <div className={info.isOpen ? "main-popup" : "main-popup close"}>
                <div className="popup-content">
                    <div className="popup-title">{info.title}</div>
                    <div className="popup-text">{info.description !== undefined ? info.description : "Описание отсутствует"}</div>
                    <TextButton flag="remove" func={[() => removeTask(info), () => closePopup()]}>Удалить</TextButton>
                    <div className="close-button" onClick={closePopup}>X</div>
                </div>
            </div>
        )
    } else {
        const object = {};
        const form = useRef();
        return (
            <div className={info.isOpen ? "main-popup" : "main-popup close"}>
                <form ref={form} className="popup-content create">
                    <div className="title-input-block">
                        <label htmlFor="create-input">
                            <h2 className="create-title">Введите задачу</h2>
                        </label>
                        <input id="create-input" type="text" onChange={(event) => (object.title = event.target.value)}/>
                    </div>

                    <div className="description-input-block">
                        <label htmlFor="create-textarea">
                            <h2 className="create-title">Дополнительное описание</h2>
                        </label>
                        <textarea id="create-textarea" onChange={(event) => (object.description = event.target.value)}/>
                    </div>
                    <div className="close-button" onClick={closePopup}>X</div>
                    <TextButton flag="add" func={[
                        () => {
                            event.preventDefault();  //* Добавить event после настройки бека и подгрузки списка задач
                            object.isDone = false; 
                            addTask(object); 
                            console.log(object);
                            form.current.reset();
                        }, 
                        () => closePopup()
                    ]}>Добавить</TextButton>
                </form>
            </div>
        )
    }
}

export default Popup