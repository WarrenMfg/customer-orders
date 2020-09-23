import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  imports: [BrowserModule, CustomersModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
