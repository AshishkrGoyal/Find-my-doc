const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const config = require('./config/secret');


const app = express();
/*const port = 8000||process.env.port;*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.key
}))

app.listen(app.get(config.port), function (err) {
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log("app is running on port: "+8000);
  }
});