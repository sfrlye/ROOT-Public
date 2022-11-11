const express = require('express');
const logger = require('morgan');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(logger('dev'));
app.use(logger('dev'));

app.use(express.static('public'))


app.get('/health', (_req, res) => {
    res.status(200).json({
        success: true,
        env: process.env.ENVIRONMENT || 'undefined'
    })

});


module.exports = app;


