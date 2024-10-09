import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentList: string[] = []; 
  name: string = '';

  addStudents() {
    if (this.name) { 
      this.studentList.push(this.name);
      this.name = ''; 
    }
  }
}