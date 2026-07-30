import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: string, ...args: any[]) {

    let birthDate = new Date(value);
    let todayDate = new Date();

    if(!value || (birthDate.getFullYear >= todayDate.getFullYear)) return 0;
    
    return todayDate.getFullYear() - birthDate.getFullYear();
  }
}
