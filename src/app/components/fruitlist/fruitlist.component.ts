import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruitList: string[] = ["Apple", "Orange"]; 
  fruit: string = '';

  addFruits() {
    if (this.fruit) { 
      this.fruitList.push(this.fruit);
      this.fruit = ''; 
    }
  }
  removeItem(index: number) {
    this.fruitList.splice(index, 1);
  }
}
