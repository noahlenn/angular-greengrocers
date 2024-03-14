import { Component, Input, inject } from '@angular/core';
import { ItemService } from 'src/app/item.service';
// import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/models/item';
// import { Item } from 'src/app/models/item';
// import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  // itemService = inject(ItemService)
  @Input() cartItems: Item[] = []
  // cartItems: Item[] = [];
  // addItemToCart(item: Item): void {
  //   this.cartItems.push(item);
  // }

  
  itemService = inject(ItemService)
  items = this.itemService.cartItems

  // addItemToCart() {
  //   this.storeService.addItemToCart(this.item);
  // }
  // removeItemFromCart() {
  //   this.storeService.removeItemFromCart(this.item);
  // }
  // removeItemFromCart(index: number): void {
  //   this.itemService.removeItemFromCart(index);
  // }
}
