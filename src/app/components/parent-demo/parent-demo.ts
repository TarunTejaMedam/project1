import {
  AfterViewInit,
  Component,
  ViewChild,
  viewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-demo',
  imports: [Child1Demo, Child2Demo, FormsModule],
  templateUrl: './parent-demo.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './parent-demo.css',
})
export class ParentDemo implements AfterViewInit {
  @ViewChild('myInputBox') myInputBox: any;
  a: number;
  parentCourseName = '';

  receiveDataFromChild(receiveDataFromChild: any) {
    this.parentCourseName = receiveDataFromChild;
  }

  constructor() {
    console.log('Parent Constructor');
    this.a = 10;
  }

  ngAfterViewInit() {
    this.myInputBox.nativeElement.style.backgroundColor = 'lightgreen';
    this.myInputBox.nativeElement.focus();
  }
}
