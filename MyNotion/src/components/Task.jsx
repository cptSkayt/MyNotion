import React from "react";
import "./Task.css";

const Task = function ({ taskInfo, closeTask, openPopup }) {
    return (
        <div className={taskInfo.isDone ? "task-block done" : "task-block"} onClick={(event) => {
            if (event.target.className !== "task-button" && taskInfo.isDone === false) {
                openPopup({key: "info", ...taskInfo});
            }
        }}>
            <div className="task-text-block">
                <div className="task-text">{taskInfo.title}</div>
            </div>
            <div className="task-button" onClick={() => closeTask(taskInfo)}>{taskInfo.isDone ? "✓" : ""}</div>
            <div className="cross-line"></div>
        </div>              // ! В данный момент мы работаем над нормальным hover для таска
        // * Сейчас в проекте 3 ветки: main, task-hover - первый вариант с блоком текста и неполным hover 
        // * variant2 - ветка для второго варианта, в котором мы сделаем отдельный блок таска и кнопку поверх этого блока с помощью relative и absolute
    )
}

export default Task