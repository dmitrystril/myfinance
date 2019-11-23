import BaseController from "./BaseController";

class IndexController extends BaseController {
  protected executeImpl() {
    return this.jsonResponse(200, 'API is working OK.');
  }
};

export default IndexController;
