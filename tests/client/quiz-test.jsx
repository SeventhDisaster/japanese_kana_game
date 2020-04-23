const React = require('react');
const { mount } = require('enzyme');
const { Quiz } = require("../../src/client/quiz");
const { quizzes, initQuestions } = require("../../src/server/quiz-repository")
const { overrideFetch, asyncCheckCondition } = require('../test-utils')
const app = require("../../src/server/app");



function isQuizDisplayed(driver) {
    const questionTag = driver.find('#question');
    const answerButtons = driver.find('.answer-button');
    const skipQuestionButton = driver.find('#next-quiz-btn');

    return questionTag.length === 1 && answerButtons.length === 4 && skipQuestionButton.length === 1
}

function getDisplayedQuiz(driver) {
    const qDiv = driver.find('#question');
    const question = qDiv.text();
    return quizzes.find(e => e.q === question);
}

async function waitForQuizDisplayed(driver) {
    return await asyncCheckCondition(() => {
        driver.update();
        return isQuizDisplayed(driver);
    }, 2000, 200);
}


//Makes sure questions are generated before tests are run
beforeAll(() => {
    initQuestions();
})

//Test does not need to be async as it should see the result before a fetch is made.
test("Test non-rendered quiz", () => {
    const driver = mount(<Quiz category={"All"}/>);
    expect(isQuizDisplayed(driver)).toBe(false);
    expect(driver.find(".await-quiz")).toBeDefined();
})

test("Test Rendered Quiz", async () => {
    overrideFetch(app);
    const driver = mount(<Quiz category={"All"}/>);
    const displayed = await waitForQuizDisplayed(driver);
    expect(displayed).toEqual(true);
})

test("Test Do Answer Wrong", async () => {
    const driver = mount(<Quiz category={"All"}/>);

    overrideFetch(app);
    await waitForQuizDisplayed(driver);

    const quiz = getDisplayedQuiz(driver);
    const wrong = (quiz.c + 2) % 4;

    //Simulate a click on the first answer
    const first = driver.find('.answer-button').at(wrong);
    first.simulate('click');

    //The answer can be either wrong or correct, due to randomly generated tests
    const cor = driver.find("#correct-counter");
    const wro = driver.find("#wrong-counter");

    expect(parseInt(cor.text())).toBe(0);
    expect(parseInt(wro.text())).toBe(1);
})

test("Test Do Answer Correctly", async () => {
    const driver = mount(<Quiz category={"All"}/>);

    overrideFetch(app);
    await waitForQuizDisplayed(driver);

    const quiz = getDisplayedQuiz(driver);

    const correct = quiz.c

    //Simulate a click on the first answer
    const first = driver.find('.answer-button').at(correct);
    first.simulate('click');

    //The answer can be either wrong or correct, due to randomly generated tests
    const cor = driver.find("#correct-counter");
    const wro = driver.find("#wrong-counter");

    expect(parseInt(cor.text())).toBe(1);
    expect(parseInt(wro.text())).toBe(0);
})