//Accquiring DB connection
const mongoose = require('mongoose');
mongoose.connect('<Your MongoDB URL>');

//creating AuthorSchema
const AuthorSchema = new mongoose.Schema({
    username: String,
    password: String,
}); 

const ReaderSchema = new mongoose.Schema({
    username: String,
    password: String
});

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    price: Number
});

//Mapping the schema with their respective collections.
const Author = mongoose.model('Author', AuthorSchema);
const Reader = mongoose.model('Reader', ReaderSchema);
const Book = mongoose.model('Book', BookSchema);

//exporting the collections to import in required places
module.exports = {
    Author,
    Reader,
    Book
}