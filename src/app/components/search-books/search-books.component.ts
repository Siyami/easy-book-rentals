import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  books: Array<object>;
  userInput: String;

  constructor(
    private _http: HttpService,
  ) { }

  ngOnInit() {
  }

  searchBooks() {
    this._http.getBooks(this.userInput)
      .subscribe((data: Book) => {
        this.books = data.items;
      });
  }

  saveToStorage(book) {
    sessionStorage.setItem('book', JSON.stringify(book));
  }

}
