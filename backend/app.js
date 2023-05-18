var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var taskRouter = require('./routes/taskRouter');
var mongoose = require('mongoose');
var cors = require('cors');


const MongoDbStore = require('connect-mongo');

var app = express();

const dbString = 'mongodb+srv://i190531:aO7QTDugNY5DH45m@cluster0.puulifg.mongodb.net/'
mongoose.connect(dbString,{
    autoIndex: false
})
    .then(()=>console.log("DB server connect"))
    .catch(e => console.log("DB error", e));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(
  session({
      secret: 'ahsdjhasdhagsjdgajsdgjhagsdjhgasdhgajhsgdjhagsdhgasd',
      resave: false,
      saveUninitialized: false,
      store: MongoDbStore.create({
          mongoUrl: dbString
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24
      }
  })
);
app.use(cors({
  'origin':['http://localhost:3000'],
  'credentials':true
}))
app.use('/',taskRouter);

app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;