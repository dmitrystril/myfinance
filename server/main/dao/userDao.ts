import { getManager } from "typeorm";

import { User } from "../model/User";

const userDao = {
  getUserById: async function(id: number) {
    const userRepository = getManager().getRepository(User);
    return await userRepository.findOne(1);
  },
};

export default userDao;
