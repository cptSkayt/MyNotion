import './TextButton.css';

const TextButton = function ({ flag, children, openPopup, func, openScreen }) {
    return (
        <div className={"text-button-block" + " " + flag + "-block"}>
            <div className={"content-main" + " " + "content-" + flag}>
                <button className={"text-button" + " " + flag + "-button"} onClick={
                    () => {
                        if (openPopup !== undefined) {
                            openPopup({key: "createTask"});
                        } 
                        if (func !== undefined) {
                            if (Array.isArray(func)) {
                                func.forEach((item) => item());
                            } else {
                                func();
                            }
                        }
                        if (openScreen !== undefined) {
                            openScreen({isOpen: true, title: children});
                        }
                    }
                }>
                    {children}
                </button>
                <div className="back"></div>
            </div>
        </div>
    )
}

export default TextButton