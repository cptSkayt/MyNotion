import './Title.css';

const Title = function ({ format, children }) {
    return (
        <h2 className={"title" + " " + format}>{children}</h2>
    )
}

export default Title