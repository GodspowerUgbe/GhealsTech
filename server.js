const app = require('./app.js');


app.listen(app.get('PORT'), err => {
    if(err){
        return console.error(`An error occured : ${err}`);
    }
    // connectDB(); db not yet implemented
    console.log(`Server is running at PORT: ${app.get('PORT')}`);
})
