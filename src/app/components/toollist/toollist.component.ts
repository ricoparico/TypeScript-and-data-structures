import { Component } from '@angular/core';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {
  toolList: string[]=["Hammer", "Screwdriver"];
  tool: string="";

  addTools(){
    if (this.tool){
      this.toolList.push(this.tool);
      this.tool="";
    }
  }
  removeItem(index: number) {
    this.toolList.splice(index, 1);
  }
}
