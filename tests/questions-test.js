const questions = require('../src/questions.js')

test("Get4Questions", () => {
    console.log(questions.getRandomQuestions(4));
    expect(questions.getRandomQuestions(4).length).toEqual(4);
})