const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cookParser = require('cookie-parser');
const handlebars = require('express3-handlebars').create(
    {
        defaultLayout: 'main',
        helpers: {
            section: function (name, options) {
                if(!this._sections) this._sections = {};
                this._sections[name] = options.fn(this);
                return null;
            },
            json:context=>JSON.stringify(context)
        }
    });
    

const adminRouter = require('./routes/adminRouter.js');
const userRouter = require('./routes/userRouter.js');
const page500 = require('./middlewares/user/page500.js');
const page404 = require('./middlewares/user/page404.js');
const cookieParser = require('cookie-parser');

// const { reqLog } = require('./middlewares/log.js'); log.js is missing


const app = express();
dotenv.config();

app.disable('x-powered-by');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('PORT', process.env.PORT || 8000);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser()); 

// app.use(reqLog);  line 22

app.use('/', userRouter);
app.use('/admin', adminRouter);

app.all('*',page404);
app.use(page500);



module.exports = app;