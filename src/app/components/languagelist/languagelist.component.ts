import { Component } from '@angular/core';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent {
  languageList: string[]=["English", "Spanish"];
  language: string="";

  addLanguages(){
    if (this.language){
      this.languageList.push(this.language);
      this.language="";
    }
  }
  removeItem(index: number) {
    this.languageList.splice(index, 1);
  }
}
