import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "cryptoType";

export const TransactionTitle = (record: TTransaction): string => {
  return record.cryptoType?.toString() || String(record.id);
};
