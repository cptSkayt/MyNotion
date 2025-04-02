import React from "react";
import { useState, useRef } from "react";
import "./Task.css";

const Task = function ({ taskInfo, func }) {
    const [taskObject, setTaskObject] = useState({isDone: false, ...taskInfo})
    const galochka = useRef();

    function taskDone() {
        setTaskObject({isDone: true, ...taskInfo})
        console.log(taskObject)
        galochka.current.innerHTML = "✓";
    }

    return (
        <div className={taskObject.isDone ? "task-block done" : "task-block"} onClick={(event) => {
            if (event.target.className !== "task-button" && taskObject.isDone === false) {
                func(taskInfo);
            }
        }}>
            <div className="task-text">{taskInfo.title}</div>
            <div className="task-button" onClick={taskDone} ref={galochka}></div>
            <div className="cross-line"></div>
        </div>
    )
}

export default Task