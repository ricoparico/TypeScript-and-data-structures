import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  gameList: string[]=["Grand Theft Auto V", "Minecraft"];
  game: string="";

  addGames(){
    if (this.game){
      this.gameList.push(this.game);
      this.game="";
    }
  }
  removeItem(index: number) {
    this.gameList.splice(index, 1);
  }
}
