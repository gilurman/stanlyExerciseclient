import {Injectable} from '@angular/core';
import {Book} from "../models/book";
import {Observable} from "rxjs";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private httpService: HttpService) {
  }

  public getAllBooks(): Observable<Book[]> {
    return this.httpService.get<Book[]>('book/');
  }

  public BuyBooks(id: string): Observable<number> {
    return this.httpService.put<number>('book/', id);
  }

  public addNewBook(b: Book): Observable<Book> {
    return this.httpService.post<Book>('book/', b);
  }
}
