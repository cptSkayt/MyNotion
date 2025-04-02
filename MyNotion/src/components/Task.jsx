import React from "react";
import "./Task.css";

const Task = function ({ taskInfo, func }) {
    return (
        <div className="task-block" onClick={(event) => {
            if (event.target.className !== "task-button") {
                func(taskInfo);
            } else {
                alert("Задача выполнена");
            }
        }}>
            <div className="task-text">{taskInfo.title}</div>
            <div className="task-button"></div>
        </div>
    )
}

export default Task