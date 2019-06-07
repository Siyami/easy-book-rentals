import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  books; 

  constructor() { }

  ngOnInit() {
    this.books = [];
    this.books.push(JSON.parse(sessionStorage.getItem('book')));
  }

}
