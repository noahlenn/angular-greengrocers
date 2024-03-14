import { Injectable, inject } from '@angular/core';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  http = inject(HttpClient)

  // get items(): Promise<Item[]> {
  //   return firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}`))
  //     .then((items: Item[]) => items.map(item => (
  //       {...item, quantity: 0}
        
  //     )
      
  //   ))
    
  // }
  get items(): Promise<Item[]> {

    const result = firstValueFrom(this.http.get(`${environment.apiUrl}`))
    console.log('results: ', result)
    // @ts-ignore
    return result

  }
}
