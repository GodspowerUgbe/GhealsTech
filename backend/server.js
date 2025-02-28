const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const clientRouter = require('./routes/clientRouter.js');
const {
    serverErrHandler,
    error404
} = require('./routes/error.js');
const { reqLog } = require('./middlewares/log.js');

// const connectDB = require('./db/config.js'); db not implemented yet

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'..', 'frontend')));
app.use('/test/1',express.static(path.join(__dirname,'..', 'frontend','pages','test1')))
app.use('/test/2',express.static(path.join(__dirname,'..', 'frontend','pages','test2')))

app.use(reqLog); //Request Logger


app.use('/', clientRouter);

app.use(serverErrHandler);

app.listen(PORT, err => {
    if(err){
        return console.error(`An error occured : ${err}`);
    }
    // connectDB(); db not yet implemented
    console.log(`Server is running at PORT: ${PORT}`);
})