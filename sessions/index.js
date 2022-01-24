const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config();

const MongoStore = require('connect-mongo')(session);

var app = express();

const dbString = process.env.DB_STRING;
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const connection = mongoose.createConnection(dbString, dbOptions);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// initializing collection 'sessions' in mongo instance
const sessionStore = new MongoStore({
    mongooseConnection: connection,
    collection: 'sessions'
});

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day
    }
}));

app.get('/', (req, res, next) => {
    res.send('<h1>Hello world (Sessions)</h1>');
});

app.listen(3000);