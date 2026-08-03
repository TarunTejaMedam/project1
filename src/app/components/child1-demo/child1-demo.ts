import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  inputs: ['a', 'b'],
})
export class Child1Demo {
  a: any;
  b: any;
}
