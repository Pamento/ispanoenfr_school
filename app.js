const createError = require('http-errors');
const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan'),
winston = require('./config/winston');
const favicon = require('serve-favicon');

const {ignoreFavicon} = require('./middleware/ignore-express-favicon');

const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');
const clientApp = require('./routes/spa');

const app = express();
const orList = ['http://cocorico-workshop.com','https://cocorico-workshop.com','http://localhost:3133','https://cocorico-workshop.herokuapp.com'];


app.use(compression());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// prevent default favicon of Express
app.use(ignoreFavicon);
app.disable('x-powered-by')
app.use(cors({
  origin: function(o, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!o) return callback(null, true);
    if(orList.indexOf(o) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: "GET,POST",
}));
app.use(morgan('combined', { stream: winston.stream }));
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
app.get('*', function(req, res){
  res.status(404).render('fourtyfour');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
