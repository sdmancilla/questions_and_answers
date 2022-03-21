const express = require('express')
const router = express.Router()
const data = require('../data')

router.post('/', async(req, res) => {
    const {history} = data;
    const player = req.body;
    history.push(player);
    console.log(history)
})

module.exports = router;