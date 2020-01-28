import quiz from "./quiz.js"

class quizGameRenderer{
    constructor() {
        this.questionElem = document.getElementById("question");
        this.answerElems = Array(4);
        for(let i = 0; i < this.answerElems.length; i++){
            this.answerElems[i] = document.getElementById("answer-btn-" + i);
        }

        this.hiragana = "あ,い,う,え,お,か,き,く,け,こ,が,ぎ,ぐ,げ,ご,さ,し,す,せ,そ,ざ,じ,ず,ぜ,ぞ,た,ち,つ,て,と,だ,ぢ,づ,で,ど,な,に,ぬ,ね,は,ひ,ふ,へ,ほ,ば,び,ぶ,べ,ぼ,ぱ,ぴ,ぷ,ぺ,ぽ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を".split(",");
    }

    generateQuestion(quiz){
        this.questionElem.innerText = quiz.q;
        for(let i = 0; i < this.answerElems.length; i++){
            if(i !== quiz.c){
                let r = Math.floor(Math.random() * this.hiragana.length);
                let randomKana = this.hiragana[r];
                if(randomKana !== quiz.a[quiz.c]){
                    this.updateAnswerList(this.answerElems[i],randomKana);
                    continue;
                }
            } else {
                this.updateAnswerList(this.answerElems[i], quiz.a[quiz.c]);
            }
        }
    }

    updateAnswerList(DOMelement, data){
        DOMelement.innerText = data;
    }

    //Play red screen flash on wrong answer
    playAnswerIndicator(isCorrect) {
        document.getElementById("page-container");
        window.requestAnimationFrame(function(time) {
            window.requestAnimationFrame(function(time) {
                if(isCorrect){
                    document.getElementById("page-container").classList.add("correctAnimation");
                    setTimeout(function(){ document.getElementById("page-container").classList.remove("correctAnimation");}, 800);
                } else {
                    document.getElementById("page-container").classList.add("wrongAnimation");
                    setTimeout(function(){ document.getElementById("page-container").classList.remove("wrongAnimation");}, 800);
                }
                
            });
        });
    }

}

const renderer = new quizGameRenderer();
const quizLogic = new quiz(renderer);

function playWrong() {
    document.getElementById("page-container");
    window.requestAnimationFrame(function(time) {
        window.requestAnimationFrame(function(time) {
            document.getElementById("page-container").classList.add("wrongAnimation");
        });
    });
}


    
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
