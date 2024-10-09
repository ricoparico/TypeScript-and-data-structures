import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movieList: string[]=["Frozen", "Brave"];
  movie: string="";

  addMovies(){
    if (this.movie){
      this.movieList.push(this.movie);
      this.movie="";
    }
  }
}
