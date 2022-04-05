import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Currency } from 'src/app/orders/models/currecy';
import { Menu } from '../models/menu';
import { MenuTemplateService } from '../services/menu-template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  menu: Menu = {
    id: '',
    location: '',
    menuItems: [],
  };

  defaultOrder: any = {
    name: new FormControl(''),
    currency: new FormControl(Currency.KHR),
    price: new FormControl(''),
  };

  menuItemForm = new FormGroup(this.defaultOrder);

  initOrders(): void {}

  constructor(private menuTemplateService: MenuTemplateService) {}

  ngOnInit(): void {}

  addMenuItem(): void {
    console.log(this.menuItemForm);
    this.menu.menuItems.push({
      id: '123',
      name: this.menuItemForm.get('name')?.value,
      paidAmount: { currency: Currency.KHR, price: 0 },
      amount: {
        price: this.menuItemForm.get('price')?.value,
        currency: this.menuItemForm.get('currency')?.value,
      },
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
    this.menuItemForm.reset();
    this.menuItemForm.setControl('currency', new FormControl(Currency.KHR));
  }

  submitNewMenu() {
    const menu = {
      name: this.menu.location,
      menuItems: this.menu.menuItems,
    };
    console.log(menu);

    this.menuTemplateService.createNewTemplate(this.menu).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
