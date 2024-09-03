import { SortOrder } from "../../util/SortOrder";

export type WalletOrderByInput = {
  address?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
