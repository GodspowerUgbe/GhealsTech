const express = require('express');

const {
   index,about,contact
} = require('../middlewares/routes.js');
const clientRouter = express.Router();

clientRouter.get('/', index).
   get('/about', about).
   get('/contact',contact);

module.exports = clientRouter;