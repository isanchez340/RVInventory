import { Component, OnInit } from '@angular/core';
import {InventoryDataService} from '../services/inventory-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText;
  inventory;
  
  constructor(
    private service:InventoryDataService
  ) { }

  ngOnInit(): void {
    this.getInventoryList();
  }

  getInventoryList() {
    this.service.executeInventoryBean().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    this.inventory = response;
    //console.log(this.inventory);
  }

  handleErrorResponse(error){
    this.inventory = error.error.message;
  }

}
