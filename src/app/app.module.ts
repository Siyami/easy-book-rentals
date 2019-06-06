import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { HttpService } from './services/http.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    SearchBooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'search-books', component: SearchBooksComponent },
      { path: '', redirectTo: 'search-books', pathMatch: 'full' },
      { path: '**', redirectTo: 'search-books', pathMatch: 'full' },
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
