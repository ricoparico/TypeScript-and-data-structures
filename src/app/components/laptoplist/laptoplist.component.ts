import { Component } from '@angular/core';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptopList: string[]=["Lenovo V14 Gen 5 (14″ Intel)", "Lenovo V15 Gen 5 (15″ Intel)"];
  laptop: string="";

  addLaptops(){
    if (this.laptop){
      this.laptopList.push(this.laptop);
      this.laptop="";
    }
  }
  removeItem(index: number) {
    this.laptopList.splice(index, 1);
  }
}
