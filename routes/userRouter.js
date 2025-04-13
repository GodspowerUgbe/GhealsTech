const express = require('express');

const index = require('../middlewares/user/index.js');
const about = require('../middlewares/user/about.js');
const contact = require('../middlewares/user/contact.js');
const contactForm = require('../middlewares/user/contactForm.js');
const register = require('../middlewares/user/register.js');
const login = require('../middlewares/user/login.js');
const page404 = require('../middlewares/user/page404.js');
const loginController = require('../controller/loginController.js');
const regController = require('../controller/regController.js');

const { authController ,refresh,logout,isJwt} = require('../controller/authController.js');

//user imports
const dashPage = require('../middlewares/client/dashboard.js');
const projPage = require('../middlewares/client/projects.js');
// const dashPage = require('../middlewares/client/dashboard.js');
// const dashPage = require('../middlewares/client/dashboard.js');
// const dashPage = require('../middlewares/client/dashboard.js');


const userRouter = express.Router();

userRouter.use('/', isJwt).
   get('/', index).
   get('/about', about).
   get('/contact', contact).
   post('/contact', contactForm).
   get('/login', login).
   post('/login', loginController).
   get('/register', register).
   post('/register', regController);
   // all('*', page404);



//client routes
userRouter.use('/', [authController, refresh]).
   get('/logout', logout).
   get('/dashboard', dashPage).
   get('/projects', projPage);
   // get('/invoices',null).
   // get('/payments',null).
   // get('/profile',null);
module.exports = userRouter;