import TransactionDto from "./TransactionDto";

interface UserDto {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  emailVerified: boolean;
  creationDate: Date;
  transactions: TransactionDto[];
};

export default UserDto;
