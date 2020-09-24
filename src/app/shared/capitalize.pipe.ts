import { Pipe, PipeTransform } from '@angular/core';

// custom pipe example; added to shared module then shared.module is imported in customers.module
@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
}
