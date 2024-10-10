import { Component } from '@angular/core';

@Component({
  selector: 'app-stationerylist',
  templateUrl: './stationerylist.component.html',
  styleUrl: './stationerylist.component.css'
})
export class StationerylistComponent {
  stationeryList: string[]=["Paper Clip", "Folder"];
  stationery: string="";

  addStationeries(){
    if (this.stationery){
      this.stationeryList.push(this.stationery);
      this.stationery="";
    }
  }
  removeItem(index: number) {
    this.stationeryList.splice(index, 1);
  }
}
