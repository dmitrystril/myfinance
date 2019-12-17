import UserType from "./UserType";

type TransactionType = {
  id: number;
  date: Date;
  description: string;
  mcc: number;
  mccDescription: string;
  amount: number;
  currency: string;
  cashback: number;
  category: number;
  user: UserType;
};

export default TransactionType;
