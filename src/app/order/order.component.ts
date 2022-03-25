import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../users/models/user.model';

interface Order {
  name: string;
  amount: Amount;
  orderedBy: User;
}

enum Currency {
  riel = 'KHR',
  dollars = 'USD',
}

interface Amount {
  price: number;
  currency: Currency;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];

  users: User[] = [
    {
      id: "123",
      firstname: "Reach",
      lastname: "Nou",
      email: "noureach@gmail.com",
      image: ""
    },
    {
      id: "321",
      firstname: "Keo",
      lastname: "Kay",
      email: "kaykeo188@gmail.com",
      image: ""
    },
    {
      id: "333",
      firstname: "Dayan",
      lastname: "Eam",
      email: "eam.dayan@gmail.com",
      image: ""
    },
  ]

  defaultOrder: any = {
    name: new FormControl(''),
    currency: new FormControl(Currency.riel),
    price: new FormControl(''),
    orderedBy: new FormControl(''),
  };

  orderForm = new FormGroup(this.defaultOrder);

  initOrders(): void {
    this.orders.push({
      name: 'fried noodles',
      amount: { price: 1.75, currency: Currency.dollars },
      orderedBy: this.users[0],
    });
    this.orders.push({
      name: 'baycha hay nam',
      amount: { price: 1.75, currency: Currency.dollars },
      orderedBy: this.users[1],
    });
    this.orders.push({
      name: 'baycha hay nam',
      amount: { price: 1.75, currency: Currency.dollars },
      orderedBy: this.users[2],
    });
    this.orders.push({
      name: 'baycha fried chicken',
      amount: { price: 1.75, currency: Currency.dollars },
      orderedBy: this.users[0],
    });
  }

  constructor() {}

  ngOnInit(): void {
    this.initOrders();
  }

  addOrder(): void {
    console.log(this.orderForm);
    this.orders.push({
      name: this.orderForm.get('name')?.value,
      amount: {
        price: this.orderForm.get('price')?.value,
        currency: this.orderForm.get('currency')?.value,
      },
      orderedBy: this.orderForm.get('orderedBy')?.value,
    });
    this.clearOrder();
  }

  isDollar(currency: string): boolean {
    return currency === Currency.dollars;
  }

  isRiel(currency: string): boolean {
    return currency === Currency.riel;
  }

  clearOrder(): void {
    this.orderForm.reset();
    this.orderForm.setControl('currency', new FormControl(Currency.riel));
  }
}
