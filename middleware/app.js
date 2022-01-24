const express = require('express');

const app = express();

function middleware1 (req, res, next) {
    console.log('I am middleware 1');
}

function standardExpressCallback(requestObject, responseObject, nextMiddleware) {
    console.log('I am standard express callback');
    responseObject.send('<h1>Hello World!</h1>');
}

app.get('/', middleware1, standardExpressCallback);

app.listen(3000);