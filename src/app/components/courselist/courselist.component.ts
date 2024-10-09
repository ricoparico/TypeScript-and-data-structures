import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
   courseList: string[]=["BSIT", "BSED"];
    course: string="";

    addCourses(){
      if (this.course){
        this.courseList.push(this.course);
        this.course="";
      }
    }
}
