import "./Note.css";
import { useRef } from "react";

const Note = ({ status, title, content, addNote, deleteNewNote, deleteNote }) => {
    if (title === undefined) {
        title = "Заметка";
    }

    if (status === 'new') {
        title = useRef();
        content = useRef();
        return (
            <div className="note-block">
                <div className="note-title-block new-title">
                    <input ref={title} className="note-textarea" id="note-title-input" placeholder="Введите название"></input>
                </div>
                <pre className="note-content new-content">
                    <textarea ref={content} className="note-textarea" id="note-content-input" placeholder="Введите текст"></textarea>
                    <div className="new-note-button-block">
                        <div id="new-note-add-button" className="new-note-button" onClick={() => addNote({title: title.current.value, content: content.current.value})}>Добавить</div>
                        <div id="new-note-delete-button" className="new-note-button" onClick={() => deleteNewNote()}>Отменить</div>
                    </div>
                </pre>
            </div>
        )
    } else {
        return (
            <div className="note-block">
                <div className="note-title-block">
                    <div className="note-title">{title}</div>
                    <div className="note-button-block">
                        <div id="note-change-button" className="note-button"></div>
                        <div id="note-delete-button" className="note-button"></div>
                    </div>
                </div>
                <pre className="note-content">
                    {content}
                </pre>
            </div>
        )
    }
}

export default Note