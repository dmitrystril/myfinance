import TransactionType from "./TransactionType";

type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  emailVerified: boolean;
  creationDate: Date;
  transactions: TransactionType[];
};

export default UserType;
