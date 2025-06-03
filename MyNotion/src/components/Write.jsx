import './Write.css';

function Write({ noteInfo, toImportant, toGeneral, openScreen }) {
    return (
        <div className="write" onClick={(event) => {
            if (event.target.className !== "imp-button" && event.target.className !== "imp-button active") {
                openScreen({title: noteInfo.name, status: "write"})
            }
        }}>
            <div className="main">
                <div className="write-title">{noteInfo.name}</div>
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

export default Write