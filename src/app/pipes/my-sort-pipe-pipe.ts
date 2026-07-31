import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySortPipe',
  pure: false,
})
export class MySortPipePipe implements PipeTransform {
  transform(arr: any[]) {
    return arr.sort((a, b) => a - b);
  }
}
