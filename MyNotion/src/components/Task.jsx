import React from "react";
import "./Task.css";

const Task = function ({ children }) {
    return (
        <div className="task-block">
            <div className="task-text">{children}</div>
            <div className="task-button"></div>
        </div>
    )
}

export default Task