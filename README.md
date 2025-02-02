# JWT-Authentication-using-Express-MongoDB-and-Mongoose-Beginner-Friendly
This is a Beginner friendly repo to see how [JWT](https://jwt.io/) authentication works in real time web applications. 

We are going to build a Backend book selling backend web application to understand jwt using 

* [Express js](https://expressjs.com/) - to serve and handle HTTP request
* [MongoDB](https://www.mongodb.com/products/platform/atlas-database) - NoSQL DB to serve Data.
* [Mongoose](https://mongoosejs.com/) - To model object schema for MongoDB.

To test our API's, We are going to use [Postman API platform](https://www.postman.com/).

Note : This repo motto is to demonstrate JWT authentication so, there will only be minimal apis created.

On our application we are going to have two types of users,
1. Author: (Basically admin)
    * Author actions :
        1."/author/signup" - To create accounts as author.
        2."/author/signin" - To signin/login with the account created.
        3."/author/addbook - To publish/add books
2. Reader: (Basically end user orcustomer)
    * Reader actions :
        1."/reader/signup" - To create accounts as readed.
        2."/reader/signin" - To signin/login with the account created.
        3."/reader/viewBooks - To view published books from all authors

* * *
Prerequiste to run this code in local env : 
    * npm and node.
    * MongoDB Atlas DB link.
* * *






