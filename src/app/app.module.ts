import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, CoreModule, SharedModule, CustomersModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
