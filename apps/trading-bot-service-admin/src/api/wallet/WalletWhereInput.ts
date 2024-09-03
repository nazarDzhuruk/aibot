import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WalletWhereInput = {
  address?: StringNullableFilter;
  balance?: FloatNullableFilter;
  id?: StringFilter;
};
