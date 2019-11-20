import { User } from "../../model/User";
import UserDto from "../UserDto";
import TransactionMap from "./TransactionMap";

class UserMap {
  public static toDto (user: User): UserDto {
    return {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      emailVerified: user.emailVerified,
      creationDate: user.creationDate,
      transactions: user.transactions.map((item) => TransactionMap.toDto(item)),
    }
  }

  public static toEntity(userDto: UserDto): User {
    return {
      firstname: userDto.firstname,
      lastname: userDto.lastname,
      email: userDto.email,
      emailVerified: userDto.emailVerified,
      creationDate: userDto.creationDate,
      transactions: userDto.transactions.map((item) => TransactionMap.toEntity(item)),
    }
  }
};

export default UserMap;
