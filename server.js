const app = require('./app.js');
const connectDB = require('./config/db.js');


app.listen(app.get('PORT'), err => {
    if(err){
        return console.error(`An error occured : ${err}`);
    }
    connectDB();
    console.log(`Server is running at PORT: ${app.get('PORT')}`);
})
