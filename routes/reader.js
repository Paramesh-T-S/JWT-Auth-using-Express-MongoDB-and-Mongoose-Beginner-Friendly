//Router for reader based api's

const express = require('express');
const router = express.Router();

const readerMiddleWare = require('../middlewares/reader');


const {Reader} = require('../db');

const {Book} = require('../db');


const jwt = require('jsonwebtoken');

const JWT_SECRET = require('../secretkeys');


router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    //Note : In real world scenario's we will not be storing passwords as plain text in DB
    await Reader.create({
        username: username,
        password: password
    });
    res.send('Reader account created successfully');
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const isReaderPresent = await Reader.findOne({
        username: username,
        password: password
    });

    //JWT token signing process if Author present in Author Table
    if(isReaderPresent){
        const token = jwt.sign(username,
            JWT_SECRET);
        res.send('SignedIn Successfully : ' + token);
    }else{
        res.status(411).json({
            msg: "Incorrect username and password"
        });
    }
});

router.get('/viewBooks', readerMiddleWare, async (req, res) => {
    const booksList = await Book.find({});
    if(booksList.length > 0){
        res.send(booksList);
    }else{
        res.send("No books added yet");
    }
});

module.exports = router;

