import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectureList: string[]=["Monday - CIA TRIAD", "Tuesday - Data Privacy & Firewalls"];
  lecture: string="";

  addLectures(){
    if (this.lecture){
      this.lectureList.push(this.lecture);
      this.lecture="";
    }
  }
  removeItem(index: number) {
    this.lectureList.splice(index, 1);
  }
}
