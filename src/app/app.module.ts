import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './users/login/login.component';
import { OrderComponent } from './orders/order-form/order.component';
import { GroupsComponent } from './main/groups/groups.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPipe } from './users/pipes/user.pipe';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { CurrencyPipe } from './orders/pipes/currency.pipe';
import { TemplateComponent } from './menu-template/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    OrderComponent,
    GroupsComponent,
    UserPipe,
    CurrencyPipe,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
