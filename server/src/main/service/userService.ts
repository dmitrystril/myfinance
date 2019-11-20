import UserRepo from '../repository/UserRepo';

class UserService {
  public getUserById(id: number) {
    return new UserRepo().getUserById(id);
  }
};

export default UserService;
