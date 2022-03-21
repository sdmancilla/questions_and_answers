const express = require('express')
const router = express.Router()
const data = require('../data')
const path = require('path');

router.post('/', async(req, res) => {
    const question = req.body;
    console.log(question)
    data.questions.push(question)
    res.status(200).sendFile(path.join(__dirname, "../../webapp/public/views/settings.html"))
})

module.exports = router;