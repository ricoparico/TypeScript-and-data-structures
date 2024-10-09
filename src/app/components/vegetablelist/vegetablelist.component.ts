import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css'
})
export class VegetablelistComponent {
  vegetableList: string[]=["Carrots", "Spinach"];
  vegetable: string="";

  addVegetables(){
    if (this.vegetable){
      this.vegetableList.push(this.vegetable);
      this.vegetable="";
    }
  }
  removeItem(index: number) {
    this.vegetableList.splice(index, 1);
  }
}
