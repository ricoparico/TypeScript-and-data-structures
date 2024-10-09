import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  bookList: string[]=["Encyclopedia", "2020 Guinness World Record"];
  book: string="";

  addBooks(){
    if (this.book){
      this.bookList.push(this.book);
      this.book="";
    }
  }
  removeItem(index: number) {
    this.bookList.splice(index, 1);
  }
}
