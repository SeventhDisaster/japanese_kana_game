const hiragana = "あ,い,う,え,お,か,き,く,け,こ,が,ぎ,ぐ,げ,ご,さ,し,す,せ,そ,ざ,じ,ず,ぜ,ぞ,た,ち,つ,て,と,だ,ぢ,づ,で,ど,な,に,ぬ,ね,の,は,ひ,ふ,へ,ほ,ば,び,ぶ,べ,ぼ,ぱ,ぴ,ぷ,ぺ,ぽ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を".split(",");
const romaji = "a,i,u,e,o,ka,ki,ku,ke,ko,ga,gi,gu,ge,go,sa,shi,su,se,so,za,zi,zu,ze,zo,ta,chi,tsu,te,to,da,ji,ju,de,do,na,ni,nu,ne,no,ha,hi,fu,he,ho,ba,bi,bu,be,bo,pa,pi,pu,pe,po,ma,mi,mu,me,mo,ya,yu,yo,ra,ri,ru,re,ro,wa,wo".split(",");

const questions = [];

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
    questions.push(question);
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

export {questions, getRandomQuestions};