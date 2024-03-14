import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalComponent } from './total/total.component';
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
  declarations: [
    TotalComponent,
    CartItemComponent,
    
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TotalComponent,
    CartItemComponent,
  ]
})
export class CartModule { }
