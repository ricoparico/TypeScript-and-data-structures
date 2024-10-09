import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cityList: string[]=["Caloocan City", "Quezon City"];
  city: string="";

  addCities(){
    if (this.city){
      this.cityList.push(this.city);
      this.city="";
    }
  }
  removeItem(index: number) {
    this.cityList.splice(index, 1);
  }
}
