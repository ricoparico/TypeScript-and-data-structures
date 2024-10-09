import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employeeList: string[] = ["Rico", "Sam"]; 
  name: string = '';

  addEmployees() {
    if (this.name) { 
      this.employeeList.push(this.name);
      this.name = ''; 
    }
  }
  removeItem(index: number) {
    this.employeeList.splice(index, 1);
  }
}
