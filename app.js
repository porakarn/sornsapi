const express = require('express')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var agentRouter = require('./routes/agent');
var authRouter = require('./routes/auth');
var jobRouter = require('./routes/job');



var passport = require('passport');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/agent', agentRouter);
app.use('/', authRouter);
app.use('/', jobRouter);




app.get('/', function (req, res) {
  res.send('tesxdft jaaa')
})

// catch 404 and forward to error handler
var db = mongoose.connection;
mongoose.connect('mongodb://porakarn:porakarn03@ds215739.mlab.com:15739/chat2')
// mongodb: //<dbuser>:<dbpassword>@ds125181.mlab.com:25181/pornuxt
// mongoose.connect('mongodb://porakarn:porakarn03@ds125181.mlab.com:25181/pornuxt');

app.use(passport.initialize());

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
