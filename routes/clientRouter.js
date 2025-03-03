const express = require('express');

const index = require('./index.js');
const about = require('./about.js');
const contact = require('./contact.js');


const clientRouter = express.Router();

clientRouter.get('/', index).
   get('/about', about).
   get('/contact',contact);

module.exports = clientRouter;