import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'shopping-cart', component: ShoppingCartComponent },
      // { path: '', redirectTo: 'rules', pathMatch: 'full' },
      // { path: '**', redirectTo: 'rules', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
