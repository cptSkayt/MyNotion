import React from "react";
import "./Task.css";

const Task = function ({ taskInfo, closeTask, openPopup }) {
    return (
        <div className={taskInfo.isDone ? "task-block done" : "task-block"} onClick={(event) => {
            if (event.target.className !== "task-button" && taskInfo.isDone === false) {
                openPopup({key: "info", ...taskInfo});
            }
        }}>
            <div className="task-text">{taskInfo.title}</div>
            <div className="task-button" onClick={() => closeTask(taskInfo)}>{taskInfo.isDone ? "✓" : ""}</div>
            <div className="cross-line"></div>
        </div>
    )
}

export default Task