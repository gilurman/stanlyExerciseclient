import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../models/book";
import {BooksApiService} from "../services/books-api.service";
import {NewBookComponent} from "../new-book/new-book.component";
import {MatDialog} from "@angular/material/dialog";
import {ErrorComponent} from "../error/error.component";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book | undefined;

  constructor(private api: BooksApiService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public buyBook(book: Book) {
    this.api.BuyBooks(book.id).subscribe(data => {
        book.quantity = data;
      }, error => {
        let dialogRef = this.dialog.open(ErrorComponent, {
          height: '200px',
          width: '200px',
        });
      }
    );
  }
}
