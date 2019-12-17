import express from 'express';

import BaseController from "./BaseController";
import ExpensesService from "../service/ExpensesService";

class ExprensesCategoryController extends BaseController {
  private expensesService: ExpensesService;

  constructor(expensesService: ExpensesService) {
    super();

    this.expensesService = expensesService;
  }

  protected async executeImpl(req: express.Request, res: express.Response) {
    const { transactionId, category } = req.body;

    const expensesTransactionDto = await this.expensesService.setTransactionCategory(transactionId, category);
    this.ok(expensesTransactionDto);
  }
};

export default ExprensesCategoryController;
