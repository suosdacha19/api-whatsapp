global.statusApp = null
global.qrCodeApp = null
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const {Client, LocalAuth} = require("whatsapp-web.js");
const fs = require("fs");
const qrcode = require("qrcode-terminal");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);


const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    statusApp = false
    qrCodeApp = qr
    qrcode.generate(qr, {small: true});
});


client.on('authenticated', (session) => {
    statusApp = true
    console.log('AUTHENTICATED');
});

client.on('disconnected', (session) => {
    statusApp = false
    client.destroy().then(() => client.initialize());
});


client.on('ready', () => {
    statusApp = true
    console.log('Client is ready!');
});

client.initialize();

global.client = client


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
