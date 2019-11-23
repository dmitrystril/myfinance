import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { types } from 'pg';
import 'reflect-metadata';

import indexRouter from './router/indexRouter';
import expensesRouter from './router/expensesRouter';
import incomeRouter from './router/incomeRouter';
import uploadRouter from './router/uploadRouter';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(indexRouter);
app.use(expensesRouter);
app.use(incomeRouter);
app.use(uploadRouter);

// this's done because pg formats decimal value to string by default ¯\_(ツ)_/¯
types.setTypeParser(types.builtins.NUMERIC, (value: string) => {
  return parseFloat(value);
});

export default app;
