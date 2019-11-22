import UserRepo from '../repository/UserRepo';
import UserMap from '../dto/mapper/UserMap';
import UserDto from '../dto/UserDto';

class UserService {
  private userRepo: UserRepo;

  constructor() {
    this.userRepo = new UserRepo();
  }

  public async getUserById(id: number): Promise<UserDto> {
    const user = await this.userRepo.getUserById(id);
    return UserMap.toDto(user);
  }
};

export default UserService;
