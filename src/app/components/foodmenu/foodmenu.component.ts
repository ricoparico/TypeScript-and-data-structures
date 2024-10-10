import { Component } from '@angular/core';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrl: './foodmenu.component.css'
})
export class FoodmenuComponent {
  foodMenu: string[]=["Chicken Adobo", "Pork Belly"];
  food: string="";

  addFoods(){
    if (this.food){
      this.foodMenu.push(this.food);
      this.food="";
    }
  }
  removeItem(index: number) {
    this.foodMenu.splice(index, 1);
  }
}
