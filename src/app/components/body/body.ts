import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { ProductList } from '../product-list/product-list';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { PipeDemo } from '../pipe-demo/pipe-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Employee } from "../employee/employee";
import { CommentList } from '../comment-list/comment-list';
import { UserCRUD } from '../user-crud/user-crud';
import { ProductListHTTP } from '../product-list-http/product-list-http';
import { EmployeeListHttp } from '../employee-list-http/employee-list-http';

@Component({
  selector: 'app-body',
  imports: [
    CommentList,
     ProductListHTTP,
    //  EmployeeListHttp
    ],
  templateUrl: './body.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './body.css',
})
export class Body {}
