const React = require('react');
const { mount } = require('enzyme');
const { Quiz } = require("../../src/client/quiz");
const { quizzes, initQuestions } = require("../../src/server/quiz-repository")
const { overrideFetch, asyncCheckCondition } = require('../test-utils')
const app = require("../../src/server/app");

function checkQuizIsDisplayed(driver) {
    const questionTag = driver.find('#question');
    expect(questionTag.length).toEqual(1);

    const answerButtons = driver.find('.answer-button');
    expect(answerButtons.length).toEqual(4);

    const skipQuestionButton = driver.find('#next-quiz-btn');
    expect(skipQuestionButton.length).toEqual(1);

    const q = questionTag
    const quiz = quizzes.find(e => e.q === q);

    return quiz;
}

async function waitForQuizDisplayed(driver) {
    const displayed = await asyncCheckCondition(() => {
        driver.update();
        return checkQuizIsDisplayed(driver);
    }, 2000, 200)

    return displayed;
}


//Makes sure questions are generated before tests are run
beforeAll(() => {
    initQuestions();
})

test("Test Rendered Quiz", async () => {
    overrideFetch(app);
    const driver = mount(<Quiz category={"All"}/>);
    const displayed = await waitForQuizDisplayed(driver);
    expect(displayed).toEqual(true);
})

test("Test Do Answer", async () => {
    const driver = mount(<Quiz category={"All"}/>);

    overrideFetch(app);
    await waitForQuizDisplayed(driver);

    let answer = undefined;

    //Simulate a click on the first answer
    const first = driver.find('.answer-button').at(0);
    first.simulate('click');

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