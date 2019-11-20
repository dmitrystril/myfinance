import TransactionDto from "./TransactionDto";

interface UserDto {
  firstname: string;
  lastname: string;
  email: string;
  emailVerified: boolean;
  creationDate: Date;
  transactions: TransactionDto[];
};

export default UserDto;
