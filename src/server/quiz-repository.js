// This file contains all of the questions for every quiz category
const hiragana = "あ,い,う,え,お,か,き,く,け,こ,が,ぎ,ぐ,げ,ご,さ,し,す,せ,そ,ざ,じ,ず,ぜ,ぞ,た,ち,つ,て,と,だ,ぢ,づ,で,ど,な,に,ぬ,ね,の,は,ひ,ふ,へ,ほ,ば,び,ぶ,べ,ぼ,ぱ,ぴ,ぷ,ぺ,ぽ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を".split(",");
const katakana = "ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,ガ,ギ,グ,ゲ,ゴ,サ,シ,ス,セ,ソ,ザ,ジ,ズ,ゼ,ゾ,タ,チ,ツ,テ,ト,ダ,ヂ,ヅ,デ,ド,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ,バ,ビ,ブ,ベ,ボ,パ,ピ,プ,ペ,ポ,マ,ミ,ム,メ,モ,ヤ,ユ,ヨ,ラ,リ,ル,レ,ロ,ワ,ヲ".split(",");
const romaji = "a,i,u,e,o,ka,ki,ku,ke,ko,ga,gi,gu,ge,go,sa,shi,su,se,so,za,zi,zu,ze,zo,ta,chi,tsu,te,to,da,ji,ju,de,do,na,ni,nu,ne,no,ha,hi,fu,he,ho,ba,bi,bu,be,bo,pa,pi,pu,pe,po,ma,mi,mu,me,mo,ya,yu,yo,ra,ri,ru,re,ro,wa,wo".split(",");

const quizzes = []

//Function generates the entire list of quizzes
function initQuestions() {
    for(let hi in hiragana) { 
        const randCorrect = Math.floor(Math.random() * 4); //Pick a random correct option
        quizzes.push(buildQuiz("Hiragana", romaji[hi], generateOptions(hiragana, randCorrect, hiragana[hi]), randCorrect));
    }
    for(let ka in katakana) { 
        const randCorrect = Math.floor(Math.random() * 4); //Pick a random correct option
        quizzes.push(buildQuiz("Katakana", romaji[ka], generateOptions(katakana, randCorrect, katakana[ka]), randCorrect));
    }
    for(let ro in romaji) { 
        const randCorrect = Math.floor(Math.random() * 4); //Pick a random correct option
        quizzes.push(buildQuiz("Phonetic", hiragana[ro], generateOptions(romaji, randCorrect, romaji[ro]), randCorrect));
        quizzes.push(buildQuiz("Phonetic", katakana[ro], generateOptions(romaji, randCorrect, romaji[ro]), randCorrect));
    }
}

function generateOptions(category, correctIndex, symbol) {
    const options = Array(4);
    options[correctIndex] = symbol; //Set correct index to value
    for(let i = 0; i < 4; i++) {
        if(!options[i]) {
            let randomIndex = Math.floor(Math.random() * category.length);
            while(randomIndex === correctIndex || options.indexOf(category[randomIndex]) !== -1){
                randomIndex = Math.floor(Math.random() * category.length); //Keep generating random indexes until array is filled without duplicates
            }
            options[i] = category[randomIndex];
        }
    }
    return options;
}

function buildQuiz(category, questionValue, optionArray, correctOption) {
    return {
        q: `${category} for: ${questionValue}`,
        a: optionArray,
        c: correctOption,
        category: category
    }
}

initQuestions(); //Method initializes all questions

function getRandomQuizzes(category, amount){
    
    if(amount < 1){
        throw "Invalid number of requested quizzes"
    }
    const quizzesInCategory = category === "All" ? quizzes : quizzes.filter((item) => item.category == category);
    
    if(amount > quizzesInCategory.length) { 
        throw "More than max amount of quizzes selected, defaulting to all quizzes"
    }    

    /* This algorithm returns a random set of unique questions */
    const selectedQuizzes = [];
    let randomQuiz = quizzesInCategory[Math.floor(Math.random() * quizzesInCategory.length)];
    while(selectedQuizzes.length < amount){
        if(selectedQuizzes.indexOf(randomQuiz) === -1) {
            selectedQuizzes.push(randomQuiz);
        } else {
            randomQuiz = quizzesInCategory[Math.floor(Math.random() * quizzesInCategory.length)];
        }        
    }

    return selectedQuizzes;
}

module.exports = {quizzes, getRandomQuizzes, initQuestions};