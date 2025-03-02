const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const handlebars = require('express3-handlebars').create(
    {
        defaultLayout: 'main',
        helpers: {
            section: function (name, options) {
                if(!this._sections) this._sections = {};
                this._sections[name] = options.fn(this);
                return null;
                }
            }
    })

const clientRouter = require('./routes/clientRouter.js');
const {
    serverErrHandler,
    error404
} = require('./routes/error.js');
const { reqLog } = require('./middlewares/log.js');

// const connectDB = require('./db/config.js'); db not implemented yet

const app = express();
dotenv.config();

app.disable('x-powered-by');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('PORT', process.env.PORT || 8000);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'..', 'view','public')));

app.use(reqLog); //Request Logger

app.use('/', clientRouter);

app.use(serverErrHandler);




module.exports = app;