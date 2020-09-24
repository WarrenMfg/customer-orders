import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: ` Filter: <input type="text" [(ngModel)]="filter" /> `
})
export class FilterComponent {
  private _filter: string;

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter); // Trigger changed event
  }

  get filter() {
    return this._filter;
  }

  @Output() changed = new EventEmitter<string>();
}
