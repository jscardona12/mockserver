var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var oauth21 =  require('./routes/oaut21');
var oauth22 =  require('./routes/oaut22');
var basic =  require('./routes/basic');
var app = express();
var passport = require('passport');
var Strategy = require('passport-http').DigestStrategy;

passport.use(new Strategy(
    { qop: "auth" },
    function(username, done) {
        return done(null, {}, "password");
    },
    function(params, done) {
        return done(null, true);
    }
));
app.use(passport.initialize());
app.use(passport.session());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/oauth2-password-credentials', oauth22);
app.use('/oauth2-client-credentials', oauth21);
app.use('/basic', basic);
app.get('/digest/success', passport.authenticate('digest', {session: false}), function(req, res) {
    res.json({"hello": "world"});
});

app.get('/digest/error-500', passport.authenticate('digest', {session: false}), function(req, res) {
    res.status(500).render("500")
});

app.get('/digest/error-503', passport.authenticate('digest', {session: false}), function(req, res) {
    res.status(503).render("503")
});

app.get('/digest/error-timeout', passport.authenticate('digest', {session: false}), function(req, res) {
    res.setTimeout(12000, function(){
        res.sendStatus(408)
    })
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

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
