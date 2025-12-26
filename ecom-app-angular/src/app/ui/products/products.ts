import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {

  products = [
    { id: 1, name: 'Laptop', price: 1200, quantity: 5 },
    { id: 2, name: 'Phone', price: 800, quantity: 10 },
    { id: 3, name: 'Tablet', price: 500, quantity: 7 }
  ];

}
