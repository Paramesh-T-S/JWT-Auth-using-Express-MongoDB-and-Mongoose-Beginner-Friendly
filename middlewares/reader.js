const JWT_SECRET = require('../secretkeys');

const jwt = require('jsonwebtoken');

//Reader middleware to verify the jwt token to provide access to the reader
function readerMiddleWare(req, res, next){
    const token = req.headers.authorization;
    if(!token){
        res.status(403).json({
            msg : "You are not authenticated"
        });
    }
    const tokens = token.split(" ");
    const decodedUsername  = jwt.verify(tokens[1], JWT_SECRET);
    if(decodedUsername){
        req.body.username = decodedUsername;
        next();
    }else{
        res.status(403).json({
            msg : "You are not authenticated"
        });
    }
}

module.exports = readerMiddleWare;
