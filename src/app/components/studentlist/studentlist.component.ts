import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentList: string[] = ["Rico", "Sam"]; 
  name: string = '';

  addStudents() {
    if (this.name) { 
      this.studentList.push(this.name);
      this.name = ''; 
    }
  }
  removeItem(index: number) {
    this.studentList.splice(index, 1);
  
}
}