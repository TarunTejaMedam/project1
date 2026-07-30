import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
})
export class CreditcardPipe implements PipeTransform {
  transform(value: string) {

    // if(!value) {
    //   return '';
    // }
    // return value.substring(0,4) + '-' + value.substring(4,8) + '-' + value.substring(8,12) + '-' + value.substring(12);
    return value.match(/\d{1,4}/g)?.join('-');
  }
}
