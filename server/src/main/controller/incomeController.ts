import BaseController from "./BaseController";

class IncomeController extends BaseController {
  protected executeImpl() {
    return this.jsonResponse(200, 'API is working OK; No data for Income yet.');
  }
};

export default IncomeController;
