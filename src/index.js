import quiz from "./quiz.js"

class quizGameRenderer{
    constructor() {
        this.questionElem = document.getElementById("question");
        this.answerElems = Array(4);
        for(let i = 0; i < this.answerElems.length; i++){
            this.answerElems[i] = document.getElementById("answer-btn-" + i);
        }
    }

    generateQuestion(quiz){
        this.questionElem.innerText = quiz.q;
        for(let i = 0; i < this.answerElems.length; i++){
            this.updateAnswerList(this.answerElems[i], quiz.a[i]);
        }
    }

    updateAnswerList(DOMelement, data){
        DOMelement.innerText = data;
    }
}

const renderer = new quizGameRenderer();
const quizLogic = new quiz(renderer);

const bindAnswerButtonEvents = function(){
    for(let i = 0; i < renderer.answerElems.length; i++){
        const element = renderer.answerElems[i];
        element.onclick = () => {quizLogic.selectAnswer(i)}
    }
}

bindAnswerButtonEvents();

const skipQuestionEvent = function(){
    const btn = document.getElementById("next-quiz-btn");
    btn.onclick = () => quizLogic.nextQuestion();
}

skipQuestionEvent()

quizLogic.nextQuestion();
