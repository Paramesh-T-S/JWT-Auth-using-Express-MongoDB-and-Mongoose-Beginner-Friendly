/*
    This is basically works as a main file which starts the application
*/

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const authorRouter = require('./routes/author');
const readerRouter = require('./routes/reader');
const PORT = 3002;

//To parse incoming request bodies
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send("Hi There, You are inside Paramesh's jwt Authentication Project",);
});

//To handle/navigating api based on the user type
app.use('/author', authorRouter);
app.use('/reader', readerRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});