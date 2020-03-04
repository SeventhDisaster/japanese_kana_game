const hiragana = "あ,い,う,え,お,か,き,く,け,こ,が,ぎ,ぐ,げ,ご,さ,し,す,せ,そ,ざ,じ,ず,ぜ,ぞ,た,ち,つ,て,と,だ,ぢ,づ,で,ど,な,に,ぬ,ね,の,は,ひ,ふ,へ,ほ,ば,び,ぶ,べ,ぼ,ぱ,ぴ,ぷ,ぺ,ぽ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を".split(",");
const katakana = "ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,ガ,ギ,グ,ゲ,ゴ,サ,シ,ス,セ,ソ,ザ,ジ,ズ,ゼ,ゾ,タ,チ,ツ,テ,ト,ダ,ヂ,ヅ,デ,ド,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ,バ,ビ,ブ,ベ,ボ,パ,ピ,プ,ペ,ポ,マ,ミ,ム,メ,モ,ヤ,ユ,ヨ,ラ,リ,ル,レ,ロ,ワ,ヲ".split(",");
const romaji = "a,i,u,e,o,ka,ki,ku,ke,ko,ga,gi,gu,ge,go,sa,shi,su,se,so,za,zi,zu,ze,zo,ta,chi,tsu,te,to,da,ji,ju,de,do,na,ni,nu,ne,no,ha,hi,fu,he,ho,ba,bi,bu,be,bo,pa,pi,pu,pe,po,ma,mi,mu,me,mo,ya,yu,yo,ra,ri,ru,re,ro,wa,wo".split(",");

let questions = []; // This variable is what is contains every quiz question

function resetQuestions() {
    questions = []; //Clear questions
    return;
}

function setAllQuestions() {
    setHiraganaQuestions();
    console.log("Hira done");
    setKatakanaQuestions();
    console.log("Kata done");
    setPhoneticQuestions();
    console.log("Phonetic done");
}

function setHiraganaQuestions() {
    for(let i in hiragana) {
        let question = {
            q: `Hiragana for: ${romaji[i]}`,
            a: Array(4),
            c: null,
            category: "Hiragana"
        }
            
        let randomPosition = Math.floor(Math.random()*4) 
        question.c = randomPosition
        question.a[randomPosition] = hiragana[i];
    
        for(let x = 0; x < question.a.length; x++){
            if(x === randomPosition){continue;}
            
            let randomAlternative = Math.floor(Math.random() * hiragana.length);
            if(randomAlternative === i){ randomAlternative++;}
            question.a[x] = hiragana[randomAlternative];
        }
    
        questions.push(question);
    }   
}

function setKatakanaQuestions() {
    for(let i in katakana) {
        let question = {
            q: `Katakana for: ${romaji[i]}`,
            a: Array(4),
            c: null,
            category: "Katakana"
        }
            
        let randomPosition = Math.floor(Math.random()*4) 
        question.c = randomPosition
        question.a[randomPosition] = katakana[i];
    
        for(let x = 0; x < question.a.length; x++){
            if(x === randomPosition){continue;}
            
            let randomAlternative = Math.floor(Math.random() * katakana.length);
            if(randomAlternative === i){ randomAlternative++;}
            question.a[x] = katakana[randomAlternative];
        }
    
        questions.push(question);
    }
}

function setPhoneticQuestions() {
    for(let i in romaji) {
        let question = {
            q: `Phonetic romaji for: ${katakana[i]}`,
            a: Array(4),
            c: null,
            category: "Phonetic"
        }
            
        let randomPosition = Math.floor(Math.random()*4) 
        question.c = randomPosition
        question.a[randomPosition] = romaji[i];
    
        for(let x = 0; x < question.a.length; x++){
            if(x === randomPosition){continue;}
            
            let randomAlternative = Math.floor(Math.random() * romaji.length);
            if(randomAlternative === i){ randomAlternative++;}
            question.a[x] = romaji[randomAlternative];
        }
    
        questions.push(question);
    }

    for(let i in romaji) {
        let question = {
            q: `Phonetic romaji for: ${hiragana[i]}`,
            a: Array(4),
            c: null,
            category: "Phonetic"
        }
            
        let randomPosition = Math.floor(Math.random()*4) 
        question.c = randomPosition
        question.a[randomPosition] = romaji[i];
    
        for(let x = 0; x < question.a.length; x++){
            if(x === randomPosition){continue;}
            
            let randomAlternative = Math.floor(Math.random() * romaji.length);
            if(randomAlternative === i){ randomAlternative++;}
            question.a[x] = romaji[randomAlternative];
        }
    
        questions.push(question);
    }
}

const getRandomQuestions = function(amount) {
    let questionArray = [];
    let indexes = [];
    while(indexes.length < amount){
        var r = Math.floor(Math.random() * questions.length);
        if(indexes.indexOf(r) === -1){
            indexes.push(r);
        }
    }

    for(let index of indexes){
        questionArray.push(questions[index]);
    }

    return questionArray;
}

export {questions, getRandomQuestions, setAllQuestions, setHiraganaQuestions, setKatakanaQuestions, setPhoneticQuestions, resetQuestions};