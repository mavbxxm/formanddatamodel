import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Order } from './order';
@Component({
  selector: 'app-coffee-shop',
  templateUrl: './coffee-shop.component.html',
  styleUrls: ['./coffee-shop.component.css']
})

export class CoffeeShopComponent implements OnInit {
  order:Order;
  coffeeForm: FormGroup;
  confirmstate: Boolean = false;
  drink = [
    { id: 1, name: "Espresso" },
    { id: 2, name: "Latte" },
    { id: 3, name: "Cappuccino" },
    { id: 4, name: "Macchiato" },
    { id: 5, name: "Americano" }
  ];

  constructor(private fb: FormBuilder) {
    this.order = new Order("", "example@example",123456789, "coffee", "hotncold",true);
    this.coffeeForm = this.fb.group({
      name: ['',Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', [Validators.required,Validators.pattern('[0][0-9]{9}')]],
      drink: ['',Validators.required],
      tempPreference: ['',Validators.required],
      sendText: [false]
    });
  }
  ngOnInit() {}

  sub() {
    var txt;
    const date = console.log(new Date())
    this.coffeeForm.value.Date = new Date()

    if (confirm("ยืนยันออเดอร์")) {
      this.confirmstate=true;
    }
    // else {
    //   txt = "ยกเลิก";
    // }

 }



}

