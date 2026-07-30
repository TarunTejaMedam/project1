import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablecopypaste]',
})
export class Disablecopypaste {
  @HostListener('copy', ['$event'])
  @HostListener('paste', ['$event'])
  onCopyOrPatse(event: any) {
    console.log('event ', event.type)
    event.preventDefault();
  }
}
