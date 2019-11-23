import BaseController from "./BaseController";
import UploadService from "../service/UploadService";

class UploadController extends BaseController {
  private uploadService: UploadService;

  constructor(uploadService: UploadService) {
    super();

    this.uploadService = uploadService;
  }

  protected async executeImpl() {
    const addedTransactionDtoList = await this.uploadService.addTransactionsFromFile(this.request.file);

		this.response.status(200).json({ rows_affected: addedTransactionDtoList.length });
  }
};

export default UploadController;
