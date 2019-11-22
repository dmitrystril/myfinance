import { Transaction } from "../../model/Transaction";
import TransactionDto from "../TransactionDto";
import UserMap from "./UserMap";

class TransactionMap {
  public static toDto(transaction: Transaction): TransactionDto {
    return {
      date: transaction.date,
      description: transaction.description,
      mcc: transaction.mcc,
      amount: transaction.amount,
      currency: transaction.currency,
      cashback: transaction.cashback,
      user: UserMap.toDto(transaction.user),
    }
  }

  public static toEntity(transactionDto: TransactionDto): Transaction {
    return {
      date: transactionDto.date,
      description: transactionDto.description,
      mcc: transactionDto.mcc,
      amount: transactionDto.amount,
      currency: transactionDto.currency,
      cashback: transactionDto.cashback,
      user: transactionDto.user ? UserMap.toEntity(transactionDto.user): null,
    }
  }
};

export default TransactionMap;
