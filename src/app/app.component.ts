import {Component} from '@angular/core';
import {Book} from "./models/book";
import {BooksApiService} from "./services/books-api.service";
import {NewBookComponent} from "./new-book/new-book.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allBooks: Book[] = [];

  constructor(private api: BooksApiService, private dialog: MatDialog) {
    this.api.getAllBooks().subscribe(data => {
      this.allBooks = data;
    });
  }

  public addBook() {
    let dialogRef = this.dialog.open(NewBookComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.allBooks.push(result);
      }
    });
  }
}
