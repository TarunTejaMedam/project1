import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(value: any) {

    if(Math.abs(value)%100 >= 11 && Math.abs(value)%100 <=13){
      return `${value}th`;
    }

    switch (Math.abs(value) % 10) {
      case 1:
        return `${value}st`;
      case 2:
        return `${value}nd`;
      case 3:
        return `${value}rd`;
      default:
        return `${value}th`;
    }
  }
}
