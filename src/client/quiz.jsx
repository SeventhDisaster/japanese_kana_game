import React from "react";
import {Redirect} from "react-router-dom";

export class Quiz extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            questions: null,
            question: null,
            correct: 0,
            wrong: 0,
            error: null,
            gameOver: false
        }
    }

    componentDidMount() {
        this.initializeGame();
    }

    initializeGame = async () => {
        const quizzes = await this.getRandomQuestions(this.props.category, 3);
        this.setState(
            !quizzes ? {error: "Error when connecting to server", questions: null, question: null} 
                : {
                    error: null,
                    questions: quizzes,
                    question: 0
                }
        )

    }

    getRandomQuestions = async (category, amount) => {
        if(amount < 1) { throw "Invalid number of quizzes" };
        const url = `/api/games?category=${category}&amount=${amount}`;
        let response;
        let payload;
        console.log(`Accessing API on URL: ${url}`) //TODO:
        try {
            response = await fetch(url, {method: "POST"});
            payload = await response.json();
        } catch (err) {
            return console.log(err);
        }
        console.log(`API returned with response ${response}`) //TODO:
        if(response.status !== 201) { return null;}

        return payload;
    }

    

    nextQuestion = () => {
        console.log(this.state.question + "  / " + this.state.questions.length);
        if((this.state.question + 1) === this.state.questions.length) {
            this.setState({gameOver: true});
        } else {
            this.setState({question: this.state.question + 1})
        }
    }

    incrementCorrect = () => {
        this.setState({correct: this.state.correct + 1});
    }

    incrementWrong = () => {
        this.setState({wrong: this.state.wrong + 1});
    }

    selectAnswer = (index) => {
        if(index === this.state.questions[this.state.question].c){
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
                {this.state.gameOver ? <Redirect to="/results"/> : "" }
                {this.state.question !== null ?
                    <div id="question-container">
                        <h2 id="correct-counter">{this.state.correct}</h2>
                        <h2 id="question">{this.state.questions[this.state.question].q}</h2>
                        <h2 id="wrong-counter">{this.state.wrong}</h2>
                    </div> 
                :
                    <p id="await-quiz">Awaiting Quiz</p>
                }

                {this.state.question !== null ?
                    <div id="answer-container">   
                        <button className="answer-button button" onClick={() => this.selectAnswer(0)}>{
                            this.state.questions[this.state.question].a[0]}
                        </button>
                        <button className="answer-button button" onClick={() => this.selectAnswer(1)}>{
                            this.state.questions[this.state.question].a[1]}
                        </button>
                        <button className="answer-button button" onClick={() => this.selectAnswer(2)}>{
                            this.state.questions[this.state.question].a[2]}
                        </button>
                        <button className="answer-button button" onClick={() => this.selectAnswer(3)}>{
                            this.state.questions[this.state.question].a[3]}
                        </button>
                    </div> 
                :
                    <p>No quiz loaded</p>
                }
                <button className="button" id="next-quiz-btn" onClick={() => this.nextQuestion()}>Skip</button>
            </section>
        )
    }
}