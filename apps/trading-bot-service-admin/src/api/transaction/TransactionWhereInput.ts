import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  cryptoType?: StringNullableFilter;
  id?: StringFilter;
  typeField?: "Option1";
  walletAddress?: StringNullableFilter;
};
