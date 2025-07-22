const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
    

const apiRouter = require('./routes/apiRouter.js');


const app = express();
dotenv.config();

app.disable('x-powered-by');

app.set('PORT', process.env.PORT || 8000);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser()); 

app.use('/api', apiRouter);

// app.use(page500);



module.exports = app;