import userDao from '../dao/userDao';

const userService = {
  getUserById: function(id: number) {
    return userDao.getUserById(id);
  },
};

export default userService;
