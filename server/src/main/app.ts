import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { createConnection } from 'typeorm';
import 'reflect-metadata';

import indexController from './controller/indexController';
import expensesController from './controller/expensesController';
import incomeController from './controller/incomeController';
import uploadController from './controller/uploadController';
import userController from './controller/userController';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

createConnection().then(async connection => {
  app.use(indexController);
  app.use(expensesController);
  app.use(incomeController);
  app.use(uploadController);
  app.use(userController);
}).catch(error => console.log("TypeORM connection error: ", error));

export default app;
