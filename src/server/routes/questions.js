const express = require('express')
const router = express.Router()
const data = require('../data')
const path = require('path');

router.post('/', async(req, res) => {
    const {question, answer} = req.body;
    const item = data.questions.find(elem => elem.question == question);
    if (item.answers[item.correct] == answer) {
        res.json({correct: true});
    } else {
        res.json({correct: false});
    }
})

router.get('/:difficult', async(req, res) => {
    const {difficult} = req.params;
    const {questions} = data;
    const level_questions = questions.filter(question => question.difficulty == difficult)
    res.json({
        question: level_questions[Math.random()*level_questions.length]
    })
})

module.exports = router;