var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movieRouter = require('./routes/movies');

// 将express项目与mongodb服务器连接起来
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/studentSystem';  // 项目需要连接的mongodb数据库地址
mongoose.connect(dbURI);
// 当项目与数据库连接成功时，触发下列事件
mongoose.connection.on('connected', function() {
    console.log(dbURI + '数据库连接成功');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 用于配置 ajax 请求的一级路径
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', movieRouter);

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

// module.exports = app;

// 更改项目的启动命令：node app.js
const porint = 3000;
app.listen(porint, () => { console.log( porint + '端口启动成功')})

