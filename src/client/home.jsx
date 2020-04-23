import React from "react";
import {Link} from "react-router-dom";

export class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
                <header id="page-header">
                    <h1 id="game-title"> Welcome to the Kana Quizzer </h1>
                    <h3 id="game-desc"> Please select the type of game you want to do</h3>
                </header>
                <div className="mode-container"> 
                    <Link to="/hiraquiz"><button className="button mode-select mode-hira">Hiragana Mode</button></Link>
                    <Link to="/kataquiz"><button className="button mode-select mode-kata">Katakana Mode</button></Link>
                    <Link to="/phonquiz"><button className="button mode-select mode-phon">Phonetic Mode</button></Link>
                    <Link to="/kanaquiz"><button className="button mode-select mode-kana">Mix Mode</button></Link>
                </div>
            </>
        )
    }
}