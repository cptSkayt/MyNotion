import "./Screen.css";

const Screen = function ({ screen, closeScreen }) {
    if (screen.status === "write") {
        console.log("Жесткий запрос к беку")
    }
    
    return (
        <div className={ screen.isOpen ? "screen-main-block" : "screen-main-block close"}>
          <div className="screen-header">
            <div className="screen-close-button" onClick={closeScreen}></div>
            <div className="screen-title">{screen.title}</div>
          </div>
          <div className="screen-content">

          </div>
        </div>
    )
}

export default Screen