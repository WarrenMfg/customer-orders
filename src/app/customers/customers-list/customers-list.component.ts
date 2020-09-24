import { Component, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent {
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

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  filterCustomers(userInput: string) {
    if (userInput) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return (
          cust.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
          cust.orderTotal.toString().indexOf(userInput) > -1
        );
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  sort(e: MouseEvent): void {
    // sort service
    const target = e.target as HTMLElement;
    console.log(target.innerText);
  }
}
