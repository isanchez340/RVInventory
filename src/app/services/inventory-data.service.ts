import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export class InventoryBean {
  constructor(public list:string){}
}

@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeInventoryBean() {
    return this.http.get<InventoryBean>('https://rvinventory.herokuapp.com/getlist');
  }
}
