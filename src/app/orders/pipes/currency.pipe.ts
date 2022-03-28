import { Pipe, PipeTransform } from '@angular/core';
import { Amount } from '../models/amount';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(amount: Amount): unknown {
    return `${amount.currency} ${amount.price}`;
  }
}
