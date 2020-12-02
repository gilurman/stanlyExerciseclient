import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book";
import {BooksApiService} from "../services/books-api.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  newBook = new Book();

  constructor(private api: BooksApiService, private dialogRef: MatDialogRef<NewBookComponent>) {
  }

  ngOnInit(): void {
  }

  public AddNewBook() {
    this.api.addNewBook(this.newBook).subscribe(data => {
      this.dialogRef.close(data);
    })
  }

  close() {
    this.dialogRef.close();
  }

}
