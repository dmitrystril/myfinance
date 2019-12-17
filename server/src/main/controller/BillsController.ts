import BaseController from "./BaseController";
import BillsService from "../service/BillsService";

class BillsController extends BaseController {
  private billsService: BillsService;

  constructor(billsService: BillsService) {
    super();

    this.billsService = billsService;
  }

  protected async executeImpl() {
    const billsTransactionDtoList = await this.billsService.getBillsTransactionDtoList();
    this.ok(billsTransactionDtoList);
  }
};

export default BillsController;
