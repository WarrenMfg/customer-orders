import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-customers></app-customers> `
})
export class AppComponent implements OnInit {
  heading: string;
  constructor() {}

  ngOnInit() {
    this.heading = 'Hello world';
  }
}
