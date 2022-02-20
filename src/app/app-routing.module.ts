import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { GreetComponent } from './component/greet/greet.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DirectivetestComponent } from './component/directivetest/directivetest.component';
import { FriendComponent } from './component/friend/friend.component';
import { CoffeeShopComponent } from './component/coffee-shop/coffee-shop.component';


// import { Routes } from '@angular/router';


const routes: Routes = [

  { path: 'Greet', component: GreetComponent},
  { path: 'MyForm', component: MyFormComponent},
  { path: 'Directive', component: DirectivetestComponent},
  { path: 'Friend', component: FriendComponent},
  { path: 'Coffee-shop', component: CoffeeShopComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
