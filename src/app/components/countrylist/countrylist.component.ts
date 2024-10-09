import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {
  countryList: string[]=["Philippines", "Japan"];
  country: string="";

  addCountries(){
    if (this.country){
      this.countryList.push(this.country);
      this.country="";
    }
  }
  removeItem(index: number) {
    this.countryList.splice(index, 1);
  }
}
