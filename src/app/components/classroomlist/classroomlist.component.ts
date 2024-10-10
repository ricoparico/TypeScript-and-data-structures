import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  classList: string[]=["Rico", "Sam"];
  class: string="";

  addClasses(){
    if (this.class){
      this.classList.push(this.class);
      this.class="";
    }
  }
  removeItem(index: number) {
    this.classList.splice(index, 1);
  }
}
