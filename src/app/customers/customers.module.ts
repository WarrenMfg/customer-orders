import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterInputComponent } from './customers-list/filter-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterInputComponent
  ],
  exports: [CustomersComponent]
})
export class CustomersModule {}
