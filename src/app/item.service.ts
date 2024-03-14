import { Injectable, inject } from '@angular/core';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  cart: Item[] = [];
  cartItems: Item[] = []
  totalPrice: number = 0;

  http = inject(HttpClient)


  get items(): Promise<Item[]> {
    return firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}`))
      .then((items: Item[]) => items.map(item => (
        {...item, quantity: 0, image: `assets/icons/${item.id}.svg`}  
      )
    ))
  }




  // addItemToCart(item: Item) {
  //   const itemInStore = this.cart.find(index => index.id === item.id);

  //   if (itemInStore) {
  //     itemInStore.quantity++;
  //   } else {
  //     const newItem = {...item, quantity: 1};
  //     this.cart.push(newItem);
  //   }
  //   this.totalPrice += item.price;
  // }
  addItemToCart(item: Item): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems[index].quantity++;
    } else {
      this.cartItems.push({...item, quantity: 1});
      console.log('cartItems: ',this.cartItems)
    }
  }

  // removeItemFromCart(item: Item) {
  //   const itemInStoreIndex = this.cart.findIndex(index => index.id === item.id);
  //   if (itemInStoreIndex !== -1) {
  //     // itemInStoreIndex.quantity++;
  //     const itemInStore = this.cart[itemInStoreIndex]
  //     itemInStore.quantity--
      
  //     if (itemInStore.quantity === 0){
  //       this.cart.splice(itemInStoreIndex, 1);
  //     }
      
  //     this.totalPrice += item.price;
  //   }
  // }

  removeItemFromCart(index: number): void {
    const itemToRemove = this.cart[index];
    if (itemToRemove.quantity > 1) {
      itemToRemove.quantity--;
    } else {
      this.cart.splice(index, 1);
    }
    this.totalPrice -= itemToRemove.price;
  }
}

