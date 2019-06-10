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
    this.changeBooksOnClick('dad');
  }

  searchBooks() {
    this._http.getBooks(this.userInput)
      .subscribe((data: Book) => {
        this.books = data.items;
      });
  }

  toggleActive(id) {
    let buttons: HTMLCollectionOf<Element> = document.getElementsByClassName('toggle-btn');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('btn-primary');
      buttons[i].classList.add('btn-outline-primary');
    }
    buttons[id].classList.remove('btn-outline-primary');
    buttons[id].classList.add('btn-primary');
  }

  changeBooksOnClick(input) {
    this._http.getBooks(input)
      .subscribe((data: Book) => {
        this.books = data.items;
      });
  }

  saveToStorage(book) {
    sessionStorage.setItem('book', JSON.stringify(book));
  }

}
