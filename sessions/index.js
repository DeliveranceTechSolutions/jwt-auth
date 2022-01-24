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

app.use(express.json();)