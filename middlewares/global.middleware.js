const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
dotenv.config();

module.exports = [
    express.json(),
    express.urlencoded({ extended: true }),
    cookieParser(),
    cors({
        origin: ['http://localhost:3000', 'http://localhost:5173'],
        credentials: true
    }),
    morgan('dev'),

]