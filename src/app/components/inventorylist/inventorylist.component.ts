import { Component } from '@angular/core';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent {
  inventoryList: string[]=["Apparel", "Electronics"];
  inventory: string="";

  addInvents(){
    if (this.inventory){
      this.inventoryList.push(this.inventory);
      this.inventory="";
    }
  }
  removeItem(index: number) {
    this.inventoryList.splice(index, 1);
  }
}
