import { Component } from '@angular/core';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowerList: string[]=["Rose", "Dahlia"];
  flower: string="";

  addFlowers(){
    if (this.flower){
      this.flowerList.push(this.flower);
      this.flower="";
    }
  }
  removeItem(index: number) {
    this.flowerList.splice(index, 1);
  }
}
