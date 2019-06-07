import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-options',
  templateUrl: './view-options.component.html',
  styleUrls: ['./view-options.component.css']
})
export class ViewOptionsComponent implements OnInit {
  book; 

  constructor() { }

  ngOnInit() {
    debugger
    this.book = JSON.parse(sessionStorage.getItem('book'));
  }

}
