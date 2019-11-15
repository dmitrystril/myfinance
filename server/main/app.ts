var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./router/indexRouter.ts');
var expensesRouter = require('./router/expensesRouter.ts');
var incomeRouter = require('./router/incomeRouter.ts');
var uploadRouter = require('./router/uploadRouter.ts');
var userRouter = require('./router/userRouter.ts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(indexRouter);
app.use(expensesRouter);
app.use(incomeRouter);
app.use(uploadRouter);
app.use(userRouter);

module.exports = app;
