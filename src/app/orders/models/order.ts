import { User } from 'src/app/users/models/user.model';
import { Amount } from './amount';

export interface Order {
  id: string;
  location?: string;
  grandTotal: Amount;
  paidForBy: User;
}
