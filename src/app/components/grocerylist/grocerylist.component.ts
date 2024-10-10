import { Component } from '@angular/core';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent {
  groceryList: string[]=["Oatmeal", "Fresh Milk"];
  grocery: string="";

  addGroceries(){
    if (this.grocery){
      this.groceryList.push(this.grocery);
      this.grocery="";
    }
  }
  removeItem(index: number) {
    this.groceryList.splice(index, 1);
  }
}
