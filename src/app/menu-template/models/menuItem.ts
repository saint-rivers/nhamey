import { Amount } from "src/app/orders/models/amount";

export interface MenuItem {
  id: string;
  name: string;
  amount: Amount;
  paidAmount: Amount;
}
