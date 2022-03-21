const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');


app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({
    extended: true
}))

//Static files
app.use("/static", express.static(path.join(__dirname, "../webapp/public")));


const settings = require('./routes/settings');
app.use('/settings', settings)

const questions = require('./routes/questions');
app.use('/questions', questions)

//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../webapp/public/views/index.html"))
});

app.get('/:routes', (req, res) => {
    const {routes} = req.params;
    res.sendFile(path.join(__dirname, `../webapp/public/views/${routes}.html`))
})

app.get('*', (req, res) => {
    res.status(404).json({error: "Not Found"})
});

//Listening
app.listen(8080, (req, res) => {
    console.log('Server listening on port 8080');
});

