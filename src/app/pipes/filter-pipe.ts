import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
 transform(emp: any[], searchText: string) {
   let searchTxt = searchText.toLowerCase();
   
   return emp.filter(emp => emp.name.toLowerCase().includes(searchTxt));
 }
}
