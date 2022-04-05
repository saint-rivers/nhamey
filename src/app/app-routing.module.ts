import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './main/groups/groups.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './users/login/login.component';
import { OrderComponent } from './orders/order-form/order.component';
import { TemplateComponent } from './menu-template/template/template.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signin',
    component: LoginComponent,
  },
  {
    path: 'orders',
    component: OrderComponent,
  },
  {
    path: 'groups',
    component: GroupsComponent,
  },
  {
    path: 'templates',
    component: TemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
