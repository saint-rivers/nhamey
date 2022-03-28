import { User } from "src/app/users/models/user.model";
import { Amount } from "./amount";

export interface FoodItem {
    id: string;
    name: string;
    amount: Amount;
    orderedBy: User;
}


