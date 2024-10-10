import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  softwareList: string[]=["Microsoft Office", "Visual Studio"];
  software: string="";

  addSoftwares(){
    if (this.software){
      this.softwareList.push(this.software);
      this.software="";
    }
  }
  removeItem(index: number) {
    this.softwareList.splice(index, 1);
  }
}
