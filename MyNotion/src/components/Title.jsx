import './Title.css';

const Title = function ({ status, format, children, openScreen }) {
    return (
        <h2 className={"title" + " " + format}>
            {children}
            <div className={status === 'button' ? "title-button" : "title-button none"} onClick={
                children === "Заметки" ? () => openScreen({title: "Создание новой заметки"}) : () => openScreen({title: "Создание новой записи"})
                }></div>
        </h2>
    )
}

export default Title