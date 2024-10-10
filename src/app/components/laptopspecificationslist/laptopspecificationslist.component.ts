import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspecificationslist',
  templateUrl: './laptopspecificationslist.component.html',
  styleUrl: './laptopspecificationslist.component.css'
})
export class LaptopspecificationslistComponent {
  laptopSpecList: string[]=["Powerful AMD Ryzen™ mobile processors", "15″ laptop with low blue light for eye comfort"];
  laptopspec: string="";

  addLaptopSpecs(){
    if (this.laptopspec){
      this.laptopSpecList.push(this.laptopspec);
      this.laptopspec="";
    }
  }
  removeItem(index: number) {
    this.laptopSpecList.splice(index, 1);
  }
}
