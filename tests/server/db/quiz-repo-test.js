const {getRandomQuizzes, initQuestions} = require("../../../src/server/quiz-repository");

beforeAll(() => {
    initQuestions()
})

test("Test invalid number of quizzes", () => {
    expect(() => getRandomQuizzes("All", -1)).toThrow()
    expect(() => getRandomQuizzes("All", 0)).toThrow()
    expect(() => getRandomQuizzes("All", 99999999)).toThrow()
})

test("Test get 1 quiz", () => {
    const quiz = getRandomQuizzes("All", 1);
    expect(quiz.length).toBe(1);
    expect(quiz[0].q).toBeDefined();
    expect(quiz[0].a).toBeDefined();
    expect(quiz[0].a.length).toBe(4);
    expect(quiz[0].category).toBeDefined();
})