import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import indexRouter from './router/indexRouter';
import expensesRouter from './router/expensesRouter';
import incomeRouter from './router/incomeRouter';
import uploadRouter from './router/uploadRouter';
import userRouter from './router/userRouter';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

createConnection().then(async connection => {
  app.use(indexRouter);
  app.use(expensesRouter);
  app.use(incomeRouter);
  app.use(uploadRouter);
  app.use(userRouter);
}).catch(error => console.log("TypeORM connection error: ", error));

export default app;
