import React from "react";
import {questions, getRandomQuestions} from "./questions.js";


export class Quiz extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            question: getRandomQuestions(1)[0],
            correct: 0,
            wrong: 0
        }
        console.log(this.state.question)
    }

    nextQuestion = () => {
        this.setState({question: getRandomQuestions(1)[0]});
    }

    incrementCorrect = () => {
        this.setState({correct: this.state.correct + 1});
    }

    incrementWrong = () => {
        this.setState({wrong: this.state.wrong + 1});
    }

    selectAnswer = (index) => {
        if(index === this.state.question.c){
            //Correct Answer
            this.incrementCorrect();
            this.nextQuestion();
        } else {
            //Wrong Answer
            this.incrementWrong();
            this.nextQuestion();
        }
    }

    render() {
        return(
            <section id="quiz-container">
                <div id="question-container">
                    <h2 id="correct-counter">{this.state.correct}</h2>
                    <h2 id="question">{this.state.question.q}</h2>
                    <h2 id="wrong-counter">{this.state.wrong}</h2>
                </div>
                <div id="answer-container">
                    <button className="answer-button button" onClick={() => this.selectAnswer(0)}>{this.state.question.a[0]}</button>
                    <button className="answer-button button" onClick={() => this.selectAnswer(1)}>{this.state.question.a[1]}</button>
                    <button className="answer-button button" onClick={() => this.selectAnswer(2)}>{this.state.question.a[2]}</button>
                    <button className="answer-button button" onClick={() => this.selectAnswer(3)}>{this.state.question.a[3]}</button>
                </div>
                <button className="button" id="next-quiz-btn" onClick={() => this.nextQuestion()}>Skip</button>
            </section>
        )
    }
}