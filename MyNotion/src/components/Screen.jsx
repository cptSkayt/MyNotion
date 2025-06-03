import "./Screen.css";
import React, { useEffect, useState } from 'react';

const Screen = function ({ screen, closeScreen }) {
    var content = '';

    if (screen.status === "write") {
        console.log("Жесткий запрос к беку");
    }

    if (screen.title === "О приложении") {
        const [text, setText] = useState('');

        useEffect(() => {
            fetch('/about.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Не удалось загрузить файл');
                }
                return response.text();
            })

            .then(data => setText(data))

            .catch(error => {
              console.error('Ошибка при загрузке about.txt:', error);
              setText('Ошибка при загрузке описания...');
            });
        }, []);

        content = text;
    }
    return (
        <div className={ screen.isOpen ? "screen-main-block" : "screen-main-block close"}>
          <div className="screen-header">
            <div className="screen-close-button" onClick={closeScreen}></div>
            <div className="screen-title">{screen.title}</div>
          </div>
          <div className="screen-content">
            {content}
          </div>
        </div>
    )
}

export default Screen