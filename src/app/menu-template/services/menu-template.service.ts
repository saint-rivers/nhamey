import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amount } from 'src/app/orders/models/amount';
import { Menu } from '../models/menu';

interface MenuItemRequest {
  name: string;
  amount: Amount;
  paidAmount: Amount;
}

interface MenuRequest {
  location: string;
  menuItems: MenuItemRequest[];
}

@Injectable({
  providedIn: 'root',
})
export class MenuTemplateService {
  constructor(private http: HttpClient) {}

  createNewTemplate(menu: MenuRequest): Observable<any> {
    return this.http.post<any>('http://localhost:1102/api/v1/menu', menu);
  }
}
