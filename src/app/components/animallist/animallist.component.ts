import { Component } from '@angular/core';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animalList: string[]=["Elephant", "Ostrich"];
  animal: string="";

  addAnimals(){
    if (this.animal){
      this.animalList.push(this.animal);
      this.animal="";
    }
  }
  removeItem(index: number) {
    this.animalList.splice(index, 1);
  }
}
