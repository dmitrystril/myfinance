import UserDto from "./UserDto";

interface TransactionDto {
  date: Date;
  description: string;
  mcc: number;
  amount: number;
  currency: string;
  cashback: number;
  user: UserDto;
}

export default TransactionDto;
