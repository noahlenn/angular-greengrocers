import { Component } from '@angular/core';
import { Item } from './models/item';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartItems: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    // Initialize cartItems as empty array
    this.cartItems = [];
  }

  // Method to add items to cart
  addItemToCart(item: Item) {
    this.cartItems.push(item);
  }
}
