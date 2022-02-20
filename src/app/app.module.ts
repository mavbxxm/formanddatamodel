import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivetestComponent } from './component/directivetest/directivetest.component';
import { AppRoutingModule } from './app-routing.module';
import { GreetComponent } from './component/greet/greet.component';
import { FriendComponent } from './component/friend/friend.component';

import { Routes, RouterModule } from '@angular/router';
import { CoffeeShopComponent } from './component/coffee-shop/coffee-shop.component';



@NgModule({
 declarations: [AppComponent, MyFormComponent, DirectivetestComponent,GreetComponent, FriendComponent, CoffeeShopComponent ],
 imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule {}
