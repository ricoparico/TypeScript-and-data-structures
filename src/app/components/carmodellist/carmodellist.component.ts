import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModelList: string[]=["Chevrolet Corve  tte", "McLaren Senna"];
  car: string="";

  addCarModels(){
    if (this.car){
      this.carModelList.push(this.car);
      this.car="";
    }
  }
  removeItem(index: number) {
    this.carModelList.splice(index, 1);
  }
}
