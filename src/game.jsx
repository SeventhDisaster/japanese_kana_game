import React from "react";
import {Quiz} from "./quiz.jsx";

export class Game extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
                <header id="page-header">
                    <h1 id="game-title">Kana Quiz</h1>
                    <h3 id ="game-desc">This quiz is based on reading Japanese Kana</h3>
                </header>
                <Quiz />
            </>
        )
    }
}