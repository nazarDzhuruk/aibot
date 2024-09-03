export type Transaction = {
  amount: number | null;
  createdAt: Date;
  cryptoType: string | null;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
  walletAddress: string | null;
};
