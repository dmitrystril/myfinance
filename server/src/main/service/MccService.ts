import MccRepo from "../repository/MccRepo";
import { Mcc } from "../model/Mcc";

class MccService {
  private mccRepo: MccRepo;

  constructor() {
    this.mccRepo = new MccRepo();
  }

  public async getMccMap(): Promise<Map<number, string>> {
    const allMcc = await this.mccRepo.getAllMcc();

    return new Map<number, string>(allMcc.map((mcc: Mcc) => [ mcc.code, mcc.description ]));
  }
};

export default MccService;
