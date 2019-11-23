import BaseController from "./BaseController";

class ExpensesController extends BaseController {
  protected executeImpl() {
    return this.jsonResponse(200, 'API is working OK; No data for Expenses yet.');
  }
};

export default ExpensesController;
