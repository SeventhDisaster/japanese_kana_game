const questions = require('../src/client/questions.js')

test("Get4Questions", () => {
    questions.setAllQuestions();
    expect(questions.getRandomQuestions(4).length).toEqual(4);
    questions.resetQuestions();
})

test("SetAndResetQuestions", () => {
    expect(questions.questions.length).toEqual(0);
    questions.setHiraganaQuestions();
    expect(questions.questions.length).toEqual(70);
    questions.setKatakanaQuestions();
    expect(questions.questions.length).toEqual(140);
    questions.setPhoneticQuestions();
    expect(questions.questions.length).toEqual(280);
    questions.resetQuestions();
    expect(questions.questions.length).toEqual(0);
    questions.setAllQuestions();
    expect(questions.questions.length).toEqual(280);
})