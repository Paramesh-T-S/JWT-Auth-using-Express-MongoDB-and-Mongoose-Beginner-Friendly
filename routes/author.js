//Router for author based api's

const express = require('express');
const router = express.Router();

const authorMiddleWare = require('../middlewares/author');

const {Author} = require('../db');

const {Book} = require('../db');


const jwt = require('jsonwebtoken');

const JWT_SECRET = require('../secretkeys');

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    //Note : In real world scenario's we will not be storing passwords as plain text in DB
    await Author.create({
        username: username,
        password: password
    });
    res.send('Author created successfully');
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const isAuthorPresent = await Author.findOne({
        username: username,
        password: password
    });

    //JWT token signing process if Author present in Author Table
    if(isAuthorPresent){
        const token = jwt.sign(username,
            JWT_SECRET);
        res.send('SignedIn Successfully : ' + token);
    }else{
        res.status(411).json({
            msg: "Incorrect username and password"
        });
    }

});

router.post('/addbook', authorMiddleWare, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const author = req.body.username;
    await Book.create({
        title: title,
        description: description,
        price: price,
        author: author
    });

    res.send('Book added successfully');
});

module.exports = router;

