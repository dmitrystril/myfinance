import BaseController from "./BaseController";
import ExpensesService from "../service/ExpensesService";

class ExpensesController extends BaseController {
  private expensesService: ExpensesService;

  constructor(expensesService: ExpensesService) {
    super();

    this.expensesService = expensesService;
  }

  protected async executeImpl() {
    const expensesTransactionDtoList = await this.expensesService.getExpensesTransactionDtoList();
    this.ok(expensesTransactionDtoList);
  }
};

export default ExpensesController;
