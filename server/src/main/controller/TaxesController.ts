import BaseController from "./BaseController";
import TaxesService from "../service/TaxesService";

class TaxesController extends BaseController {
  private taxesService: TaxesService;

  constructor(taxesService: TaxesService) {
    super();

    this.taxesService = taxesService;
  }

  protected async executeImpl() {
    const taxesTransactionDtoList = await this.taxesService.getTaxesTransactionDtoList();
    this.ok(taxesTransactionDtoList);
  }
};

export default TaxesController;
