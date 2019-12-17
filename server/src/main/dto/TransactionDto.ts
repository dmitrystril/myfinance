import UserDto from "./UserDto";

interface TransactionDto {
  id: number;
  date: Date;
  description: string;
  mcc: number;
  mccDescription: string;
  amount: number;
  currency: string;
  cashback: number;
  category: number;
  user: UserDto;
}

export default TransactionDto;
