import {questions} from './questions.js';

export default class quiz{
    constructor(renderer) {
        this.quiz = questions[Math.floor(Math.random() * questions.length)];
        this.renderer = renderer;

        // Gamestate and Statistics Handling
        this.totalCorrectCounter = 0;
        this.totalWrongCounter = 0;

        this.hiraganaCorrectCounter = 0;
        this.hiraganaWrongCounter = 0;

        this.katakanaCorrectCounter = 0;
        this.katakanaWrongCounter = 0;
    }

    selectAnswer(index) {
        if(index === this.quiz.c){
            //Correct Answer
            this.renderer.playAnswerIndicator(true); //Flashes a green screen
            this.trackStat(this.quiz.category, true);
            this.nextQuestion();
        } else {
            //Wrong Answer
            this.renderer.playAnswerIndicator(false); //Flashes a red screen
            this.trackStat(this.quiz.category, false);
            this.nextQuestion();
        }
        this.updateGameStatistics();
    }

    nextQuestion() {
        let nextQuestion = questions[Math.floor(Math.random() * questions.length)];
        this.quiz = nextQuestion;
        this.renderer.generateQuestion(this.quiz);
    }

    trackStat(category, isCorrect){
        switch(category){
            case "Hiragana":
                if(isCorrect){
                    this.totalCorrectCounter++;
                    this.hiraganaCorrectCounter++;
                } else {
                    this.totalWrongCounter++;
                    this.hiraganaWrongCounter++;
                }
                break;
            case "Katakana": 
                if(isCorrect){
                    this.totalCorrectCounter++;
                    this.katakanaCorrectCounter++;
                } else {
                    this.totalWrongCounter++;
                    this.katakanaWrongCounter++;
                }
                break;
            default: break;
        }
    }

    updateGameStatistics() {
        //TODO: Will update statistics of the game
    }
}