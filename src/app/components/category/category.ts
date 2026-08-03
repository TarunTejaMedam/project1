import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  inputs: ['categoryObj'],
})
export class Category {
  categoryObj: any;
}
