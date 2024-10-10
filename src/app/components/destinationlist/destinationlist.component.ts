import { Component } from '@angular/core';

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  destinationList: string[]=["National Museum of the Philippines", "Ayala Museum"];
  destination: string="";

  addDestinations(){
    if (this.destination){
      this.destinationList.push(this.destination);
      this.destination="";
    }
  }
  removeItem(index: number) {
    this.destinationList.splice(index, 1);
  }
}
