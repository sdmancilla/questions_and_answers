const express = require('express')
const router = express.Router()
const data = require('../data')

router.post('/', async(req, res) => {
    const {question, answer} = req.body;
    const item = data.questions.find(elem => elem.question == question);
    if (item.answers[item.correct] == answer) {
        res.json({correct: true});
    } else {
        res.json({correct: false, correctIndex: item.correct});
    }
})

router.get('/:difficult', async(req, res) => {
    const {difficult} = req.params;
    const {questions} = data;
    const level_questions = questions.filter(question => question.difficulty == difficult)
    console.log(level_questions)
    res.json(level_questions[Math.floor(Math.random()*level_questions.length)])
})

module.exports = router;