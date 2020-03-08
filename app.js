/*
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./routes/index');
const session = require('express-session');
const http = require('http')

var server = http.createServer((function(request, response) {
    response.writeHead(200, {"Content-type": "text/plain"});

    response.end("Hello world\n");
}));

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());

app.use(session({
    secret: 'dog hero',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))
app.use(flash());

app.use('/', routes);

//app.use('/', express.static('public'));

module.exports = app;
*/
