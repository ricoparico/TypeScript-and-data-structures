import { Component } from '@angular/core';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subjectList: string[]=["System Integrated and Architecture 2", "Information Assurance and Security 2"];
  subject: string="";

  addSubjects(){
    if (this.subject){
      this.subjectList.push(this.subject);
      this.subject="";
    }
  }
  removeItem(index: number) {
    this.subjectList.splice(index, 1);
  }
}
