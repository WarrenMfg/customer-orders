import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{ heading }}</h1>`
})
export class AppComponent implements OnInit {
  heading: string;
  constructor() {}

  ngOnInit() {
    this.heading = 'Hello world';
  }
}
