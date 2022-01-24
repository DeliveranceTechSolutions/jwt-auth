const express = require('express');

const app = express();

function middleware1 (req, res, next) {
    console.log('I am middleware 1');
    req.customProperty = 100;
    next(errObj);
}

function middleware2 (req, res, next) {
    console.log(`I am middleware 2 with ${req.customProperty}`);

    next();
}

function errorHandler(err, req, res, next) {
    if(err) {
        res.send('<h1>There was an error, please try again</h1>')
    }
}

function standardExpressCallback(requestObject, responseObject, nextMiddleware) {
    console.log('I am standard express callback');
    responseObject.send('<h1>Hello World!</h1>');
}

app.use(middleware1);
app.use(middleware2);

app.get('/', middleware1, middleware2);

app.use(errorHandler);

app.listen(3000);