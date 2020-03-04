const React = require('react');
const { mount } = require('enzyme');
const {Quiz} = require("../src/client/quiz");
const {setAllQuestions} = require("../src/client/questions")

function checkQuizIsDisplayed(driver) {
    const questionTag = driver.find('#question');
    expect(questionTag.length).toEqual(1);

    const answerButtons = driver.find('.answer-button');
    expect(answerButtons.length).toEqual(4);

    const skipQuestionButton = driver.find('#next-quiz-btn');
    expect(skipQuestionButton.length).toEqual(1);
}

//Makes sure questions are generated before tests are run
beforeAll(() => {
    setAllQuestions();
})

test("Test Rendered Quiz", () => {
    const driver = mount(<Quiz/>);
    checkQuizIsDisplayed(driver);
})

test("Test Do Answer", () => {
    const driver = mount(<Quiz/>);

    let answer = undefined;

    //Simulate a click on the first answer
    const first = driver.find('.answer-button').at(0);
    first.simulate('click');
    checkQuizIsDisplayed(driver);

    //The answer can be either wrong or correct, due to randomly generated tests
    const cor = driver.find("#correct-counter");
    const wro = driver.find("#wrong-counter");

    console.log(cor.text());

    //Checks both correct and wrong, if either of them is 1, that means an increment happened
    if(cor.text() === "1" || wro.text() === "1"){
        answer = 1;
    }

    expect(answer).toBeDefined();
})