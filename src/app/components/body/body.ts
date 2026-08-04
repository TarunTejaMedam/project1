import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { ProductList } from '../product-list/product-list';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipeDemo } from '../pipe-demo/pipe-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Employee } from "../employee/employee";

@Component({
  selector: 'app-body',
  imports: [Employee],
  templateUrl: './body.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './body.css',
})
export class Body {}
