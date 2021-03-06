import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterComponent } from './customers-list/filter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, SharedModule, FormsModule],
  declarations: [CustomersComponent, CustomersListComponent, FilterComponent],
  exports: [CustomersComponent]
})
export class CustomersModule {}
