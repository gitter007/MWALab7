var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var secret = require('./routes/secret');
const crypto = require('crypto');
var mongo = require('mongoskin');

var app = express();
var port = 9000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/secret', secret);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// const decipher = crypto.createDecipher('aes256', 'asaadsaad');

// const encrypted =
//     'ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03';
// let decrypted = decipher.update(encrypted, 'hex', 'utf8');
// decrypted += decipher.final('utf8');
// console.log(decrypted);

app.listen(port, () => console.log('Server started at port: '+port));