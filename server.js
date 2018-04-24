const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const ejs = require('ejs');
const engine = require('ejs-mate');
//const MongoStore = require('express-session')(session);
const router = require('./routes/main');
const admin = require('./routes/admin');
const logger = require('morgan');

const config = require('./config/secret');


const app = express();
/*const port = 8000||process.env.port;*/
app.use('/test-app', router);
app.use('/admin',admin);
app.use(express.static(__dirname+ '/public'));


app.use(logger('dev'));
app.set('view engine','ejs');
app.engine('ejs', engine);

app.set('views',__dirname + '/views');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.key
}));




app.listen((config.port), function (err) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("app is running on port: "+8000);
    }
});


/*
app.listen(4040);*/
