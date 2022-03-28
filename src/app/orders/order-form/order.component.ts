import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Currency } from '../models/currecy';
import { User } from '../../users/models/user.model';
import { FoodItem } from '../models/foodItem';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  foodItems: FoodItem[] = [];

  users: User[] = [
    {
      id: '123',
      firstname: 'Reach',
      lastname: 'Nou',
      email: 'noureach@gmail.com',
      image: '',
    },
    {
      id: '321',
      firstname: 'Keo',
      lastname: 'Kay',
      email: 'kaykeo188@gmail.com',
      image: '',
    },
    {
      id: '333',
      firstname: 'Dayan',
      lastname: 'Eam',
      email: 'eam.dayan@gmail.com',
      image: '',
    },
  ];

  defaultOrder: any = {
    name: new FormControl(''),
    currency: new FormControl(Currency.KHR),
    price: new FormControl(''),
    orderedBy: new FormControl(''),
  };

  orderForm = new FormGroup(this.defaultOrder);

  initOrders(): void {
    this.foodItems.push({
      id: '123',
      name: 'fried noodles',
      amount: { price: 1.75, currency: Currency.USD },
      orderedBy: this.users[0],
    });
    this.foodItems.push({
      id: '123',
      name: 'baycha hay nam',
      amount: { price: 1.75, currency: Currency.USD },
      orderedBy: this.users[1],
    });
    this.foodItems.push({
      id: '123',
      name: 'sandwich',
      amount: { price: 1.75, currency: Currency.USD },
      orderedBy: this.users[2],
    });
    this.foodItems.push({
      id: '123',
      name: 'fried rice kimchi',
      amount: { price: 1.75, currency: Currency.USD },
      orderedBy: this.users[0],
    });
  }

  constructor() {}

  ngOnInit(): void {
    this.initOrders();
  }

  addOrder(): void {
    console.log(this.orderForm);
    this.foodItems.push({
      id: '123',
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
    return currency === Currency.USD;
  }

  isRiel(currency: string): boolean {
    return currency === Currency.KHR;
  }

  clearOrder(): void {
    this.orderForm.reset();
    this.orderForm.setControl('currency', new FormControl(Currency.KHR));
  }
}
