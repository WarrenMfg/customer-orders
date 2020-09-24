import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [BrowserModule, CoreModule, CustomersModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
