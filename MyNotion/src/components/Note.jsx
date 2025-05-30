import './Note.css';

function Note({ noteInfo, toImportant, toGeneral }) {
    return (
        <div className="note">
            <div className="main">
                <div className="note-title">{noteInfo.name}</div>
            </div>
            <div className="footer">
                <div className="tag-block">
                </div>
                <div className={noteInfo.status === "important" ? "imp-button active" : "imp-button"} onClick={
                    noteInfo.status === "important" ? () => toGeneral(noteInfo) : () => toImportant(noteInfo)
                }></div>
            </div>
        </div>
    )
}

export default Note