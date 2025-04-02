import React from "react";
import "./Task.css";

const Task = function ({ children, func }) {
    return (
        <div className="task-block" onClick={func}>
            <div className="task-text">{children}</div>
            <div className="task-button"></div>
        </div>
    )
}

export default Task