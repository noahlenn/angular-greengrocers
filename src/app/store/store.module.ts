import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreItemComponent } from './store-item/store-item.component';



@NgModule({
  declarations: [
    StoreItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StoreItemComponent
  ]
})
export class StoreModule { }
