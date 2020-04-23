const express = require('express');
const {getRandomQuizzes} = require('./quiz-repository');

const router = express.Router();

router.post('/games', (req, res) => {
    const query = req.query
    const amount = query.amount ? query.amount : 10; //Limit to 10 if no amount set
    const payload = getRandomQuizzes(query.category, amount); //TODO: Change amount og quizzes to get
    res.status(201).json(payload);
})

module.exports = router;