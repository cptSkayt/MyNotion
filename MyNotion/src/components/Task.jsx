import React from "react";
import "./Task.css";

const Task = function ({ children, func }) {
    return (
        <div className="task-block" onClick={(event) => {
            if (event.target.className !== "task-button") {
                func()
            } else {
                alert("Задача выполнена");
            }
        }}>
            <div className="task-text">{children}</div>
            <div className="task-button"></div>
        </div>
    )
}

export default Task