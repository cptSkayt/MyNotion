import './Title.css';

const Title = function ({ status, format, children, openScreen, createNote }) {
    return (
        <h2 className={"title" + " " + format}>
            {children}
            <div className={status === 'button' ? "title-button" : "title-button none"} onClick={
                children === "Заметки" ? () => createNote() : () => openScreen({title: "Создание новой запсии"})
                }></div>
        </h2>
    )
}

export default Title