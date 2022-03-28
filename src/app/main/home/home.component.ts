import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Currency } from 'src/app/orders/models/currecy';
import { FoodItem } from 'src/app/orders/models/foodItem';
import { Order } from 'src/app/orders/models/order';

enum viewingTab {
  ORDERS = 'ORDERS',
  FOOD_ITEMS = 'FOOD_ITEMS',
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  orders: Order[] = [];
  foodItems: FoodItem[] = [];
  // viewing: viewingTab | null = null;
  viewing: viewingTab = viewingTab.FOOD_ITEMS;

  constructor(private router: Router) {
    // this.getPendingOrders();
  }

  ngOnInit(): void {}

  goToNewOrder() {
    this.router.navigate(['orders']);
  }

  getPendingOrders() {
    // todo: get user's token
    // todo: findOrdersByMemberId()
    this.viewing = viewingTab.ORDERS;
    this.orders = [];
    this.orders.push({
      id: '123',
      location: 'food panda',
      grandTotal: { currency: Currency.KHR, price: 120000 },
      paidForBy: {
        id: '123',
        firstname: 'dayan',
        lastname: 'eam',
        email: 'eam.dayan@gmail.com',
      },
    });
    this.orders.push({
      id: '124',
      location: 'papa johns',
      grandTotal: { currency: Currency.KHR, price: 200000 },
      paidForBy: {
        id: '123',
        firstname: 'Reach',
        lastname: 'Nou',
        email: 'reaxh@gmail.com',
      },
    });
  }

  getFoodItems() {
    // todo: get user's token
    this.viewing = viewingTab.FOOD_ITEMS;
    this.foodItems = [];
    this.foodItems.push({
      id: '124',
      name: 'fried noodles',
      amount: { currency: Currency.KHR, price: 5000 },
      orderedBy: {
        id: '123',
        firstname: 'Reach',
        lastname: 'Nou',
        email: 'reaxh@gmail.com',
      },
    });
    this.foodItems.push({
      id: '127',
      name: 'sandwich',
      amount: { currency: Currency.KHR, price: 4000 },
      orderedBy: {
        id: '123',
        firstname: 'Reach',
        lastname: 'Nou',
        email: 'reaxh@gmail.com',
      },
    });
  }

  isViewingOrder(): boolean {
    return this.viewing === viewingTab.ORDERS;
  }

  isViewingFoodItems(): boolean {
    return this.viewing === viewingTab.FOOD_ITEMS;
  }
}
