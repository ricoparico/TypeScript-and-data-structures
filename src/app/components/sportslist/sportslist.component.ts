import { Component } from '@angular/core';

@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.component.html',
  styleUrl: './sportslist.component.css'
})
export class SportslistComponent {
  sportsList: string[]=["Basketball", "Volleyball"];
  sports: string="";

  addSports(){
    if (this.sports){
      this.sportsList.push(this.sports);
      this.sports="";
    }
  }
  removeItem(index: number) {
    this.sportsList.splice(index, 1);
  }
}
