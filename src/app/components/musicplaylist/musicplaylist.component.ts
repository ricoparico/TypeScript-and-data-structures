import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  musicList: string[]=["Rainbow - Gatton", "When Scars Become Art - Gatton"];
  music: string="";

  addMusics(){
    if (this.music){
      this.musicList.push(this.music);
      this.music="";
    }
  }
  removeItem(index: number) {
    this.musicList.splice(index, 1);
  }
}
