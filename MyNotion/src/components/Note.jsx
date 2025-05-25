import './Note.css';

function Note({ status }) {
    return (
        <div className="note">
            <div className="main"></div>
            <div className="footer">
                <div className="tag-block">

                </div>
                <div className={status === "important" ? "imp-button active" : "imp-button"}></div>
            </div>
        </div>
    )
}

export default Note