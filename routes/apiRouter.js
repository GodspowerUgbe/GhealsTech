const express = require('express');

const loginController = require('../controller/loginController.js');
const regController = require('../controller/regController.js');

const { authController ,refresh,logout,isJwt} = require('../controller/authController.js');

const apiRouter = express.Router();

apiRouter.use('/', isJwt);

module.exports = apiRouter;