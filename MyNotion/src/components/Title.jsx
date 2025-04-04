import React from "react";
import './Title.css';

const Title = function ({children}) {
    return (
        <h2 className="title">{children}</h2>
    )
}

export default Title