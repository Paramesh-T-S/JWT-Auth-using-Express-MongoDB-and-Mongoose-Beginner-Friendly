# JWT-Authentication-using-Express-MongoDB-and-Mongoose-Beginner-Friendly
This is a Beginner friendly repo to see how [JWT](https://jwt.io/) authentication works in real time web applications. 

We are going to build a Backend book selling backend web application to understand jwt using 

* [Express js](https://expressjs.com/) - to serve and handle HTTP request
* [MongoDB](https://www.mongodb.com/products/platform/atlas-database) - NoSQL DB to serve Data.
* [Mongoose](https://mongoosejs.com/) - To model object schema for MongoDB.

To test our API's, We are going to use [Postman API platform](https://www.postman.com/).

**Note :** This repo motto is to demonstrate JWT authentication so, there will only be minimal apis created.

On our application we are going to have two types of users,
1. Author: (Basically admin)
    * Author actions :
        1."**/author/signup**" - To create accounts as author.
        2."**/author/signin**" - To signin/login with the account created.
        3."**/author/addbook**" - To publish/add books
2. Reader: (Basically end user or customer)
    * Reader actions :
        1."**/reader/signup**" - To create accounts as readed.
        2."**/reader/signin**" - To signin/login with the account created.
        3."**/reader/viewBooks**" - To view published books from all authors

* * *

Prerequiste to run this code in local env : 
* npm and node. - [installation link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
*  MongoDB Atlas DB link. - [Tutorial link](https://www.mongodb.com/resources/products/platform/mongodb-atlas-tutorial)

* * *

Project structure:

```
│Root folder
│   index.js - (Works as main file to start application)
│
├───db
│       index.js - (DB configuration and initializer file)
│
├───middlewares
│       author.js - (author middle ware to verify JWT)
│       reader.js - (reader middle ware to verify JWT)
│
├───routes
│       author.js - (router to handle author based requests and sign JWT)
│       reader.js - (router to handle reader based requests and sign JWT)
│
└───secretkeys
        index.js - (To store secretkey for signing and verification process)
```

Tools used : 
- MongoDB Comapss - To visualize the DB.
- Postman API - for testing.

* * *
Version details : 

- npm@10.8.2
- node@v20.18.0
- body-parser@1.20.3
- express@4.21.2
- jsonwebtoken@9.0.2
- mongoose@8.9.5

* * *
To run this in your machine locally, Follow the below steps:

1. Download this project as ZIP and unzip it or clone this project to your local directory.
2. Open Terminal  > navigate to this directory.
3. Run these below commands:
	1. npm install express
	2. npm install mongoose
	3. npm install jsonwebtoken
	4. npm install body-parser
4. Open index.js file under "db" folder > replace the MongoDB Url.
5. Open index.js file under "secretkeys" > replace your own secret key.
6. Navigate to root directory and 
7. To run this application: Run this command "node .\index.js" and server will be serving on port 3002.
* * *


