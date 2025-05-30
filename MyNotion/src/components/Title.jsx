import './Title.css';

const Title = function ({ status, format, children }) {
    return (
        <h2 className={"title" + " " + format}>
            {children}
            <div className={status === 'button' ? "title-button" : "title-button none"}></div>
        </h2>
    )
}

export default Title