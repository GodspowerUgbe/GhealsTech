const app = require('./app.js');
const next = require('./public/node_modules/next');
const connectDB = require('./config/db.js');


const nextApp = next({
    dev: process.env.MODE == 'dev',
    dir: './public'
});
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    app.use((req, res,next) => {
        if(!/\/api\/.*/.test(req.url)){
            return handle(req, res);
        }
        next();
    }
    );

    app.listen(app.get('PORT'), err => {
        if(err){
            return console.error(`An error occured : ${err}`);
        }
        connectDB();
        console.log(`Server is running at PORT: ${app.get('PORT')}`);
    })

})


