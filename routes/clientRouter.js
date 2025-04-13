const dashPage = require('../middlewares/client/dashboard.js');
// const dashPage = require('../middlewares/client/dashboard.js');
// const dashPage = require('../middlewares/client/dashboard.js');
// const dashPage = require('../middlewares/client/dashboard.js');
// const dashPage = require('../middlewares/client/dashboard.js');



const clientRouter = require('./userRouter.js');

clientRouter.get('/dashboard',dashPage).
    get('/projects',null).
    get('/invoices',null).
    get('/payments',null).
    get('/profile',null);

module.exports = clientRouter;