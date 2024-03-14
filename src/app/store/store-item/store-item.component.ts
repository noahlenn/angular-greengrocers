import { Component, Input, inject } from '@angular/core';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/models/item';
// import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})

export class StoreItemComponent {
  // storeService = inject(StoreService)
  itemService = inject(ItemService)
  // console.log('Items in ItemService:', this.itemService.items);


  items = this.itemService.items

  // constructor() {
  //   console.log('Item in StoreItemComponent:', this.item);
  // }

  // addItemToCart() {
  //   if (this.item !== null) {
  //     this.storeService.addItemToCart(this.item);
  //   }
  // }
}
