import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpService {
  apiKey = 'AIzaSyDLKtNfai9kIB45nZrUHeZezj3vJGJD2XI';

  constructor(private http: HttpClient) {}

  getBooks(input) {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${input}&key=${this.apiKey}`;
    return this.http.get<Book>(url)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        // catchError(this.handleError) // then handle the error
      );
  }

}
