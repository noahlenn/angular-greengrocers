import { Component, Input, OnInit, inject } from '@angular/core';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/models/item';
// import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})

export class StoreItemComponent{
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  @Input() item: Item | null = null;

  itemService = inject(ItemService)
  
  // console.log('Items in ItemService:', this.itemService.items);


  items = this.itemService.items



  // addItemToCart() {
  //   if (this.item !== null) {
  //     this.itemService.addItemToCart(this.item);
  //   }
  // }
  addItemToCart(item: Item): void {
    this.itemService.addItemToCart(item);
  }
}
