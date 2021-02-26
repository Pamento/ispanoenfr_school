const createError = require('http-errors');
const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');

const {ignoreFavicon} = require('./middleware/ignore-express-favicon');

const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');
const clientApp = require('./routes/spa');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// prevent default favicon of Express
app.use(ignoreFavicon);
app.use(cors());
// app.use((req,res,next) => {
//   res.setHeader('Access-Control-Allow-Origin','http://localhost:3000/');
//   res.setHeader('Access-Control-Allow-Methods','POST','GET');
//   res.setHeader('Access-Control-Request-Headers', 'Content-Type');
// })
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Set for prevent load of express logo, but doeasnt work.
// app.get('/favicon.ico', (req, res) => res.status(204));

// static file for join with files from 'views' folder
app.use(express.static(path.join(__dirname, 'public')));
// static file for client react build to serve at user
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/', clientApp);
app.use('/service', indexRouter);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
