import BaseController from "./BaseController";
import IncomeService from "../service/IncomeService";

class IncomeController extends BaseController {
  private incomeService: IncomeService;

  constructor(incomeService: IncomeService) {
    super();

    this.incomeService = incomeService;
  }

  protected async executeImpl() {
    const incomeTransactionDtoList = await this.incomeService.getIncomeTransactionDtoList();
    this.ok(incomeTransactionDtoList);
  }
};

export default IncomeController;
