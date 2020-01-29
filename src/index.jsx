import React from "react";
import ReactDOM from "react-dom";
import {Game} from "./game";

const App = () => {
    return (
        <div id="page-container">
            <Game /> 
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));