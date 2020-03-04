import React from "react";
import {Quiz} from "./quiz.jsx";
import {Link} from "react-router-dom";
import {setHiraganaQuestions, setKatakanaQuestions, setAllQuestions, resetQuestions, setPhoneticQuestions} from "./questions.js";

export class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            category: props.category
        }

        resetQuestions(); //Always reset questions on component load

        switch(this.state.category){
            case "Kana": setAllQuestions(); break; //Generates a mix of all game types
            case "Hira": setHiraganaQuestions(); break; //Generates only Hiragana questions
            case "Kata": setKatakanaQuestions(); break; //Generates only Katakana questions
            case "Phon": setPhoneticQuestions(); break; //Generates phonetic questions for both Hira and Kata
            default: setAllQuestions(); break;
        }
    }

    render() {
        return(
            <>
                <header id="page-header">
                    <h1 id="game-title">Kana Quiz</h1>
                    <h3 id ="game-desc">This quiz is based on reading Japanese Kana</h3>
                </header>
                <Quiz/>
            </>
        )
    }
}