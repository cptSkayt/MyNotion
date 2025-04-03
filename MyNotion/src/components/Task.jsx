import React from "react";
import { useState, useRef } from "react";
import "./Task.css";

const Task = function ({ taskInfo, func, taskDone }) {
    return (
        <div className={taskInfo.isDone ? "task-block done" : "task-block"} onClick={(event) => {
            if (event.target.className !== "task-button" && taskInfo.isDone === false) {
                func(taskInfo);
            }
        }}>
            <div className="task-text">{taskInfo.title}</div>
            <div className="task-button" onClick={() => taskDone(taskInfo)}>{taskInfo.isDone ? "✓" : ""}</div>
            <div className="cross-line"></div>
        </div>
    )
}

export default Task