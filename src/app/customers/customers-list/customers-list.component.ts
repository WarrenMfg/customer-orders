import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = []; // original data
  filteredCustomers: ICustomer[] = []; // filtered data
  customersOrderTotal: number;
  currencyCode = 'USD';

  @Input() set customers(cust: ICustomer[]) {
    if (cust) {
      this.filteredCustomers = this._customers = cust;
      this.calculateOrders();
    }
  }

  get customers(): ICustomer[] {
    return this._customers;
  }

  constructor() {}

  ngOnInit() {}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(e: MouseEvent): void {
    // sort service
    const target = e.target as HTMLElement;
    console.log(target.innerText);
  }
}
