import { Component, inject } from '@angular/core';
import { EmployeeListService } from '../../services/employee-list-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list-http',
  imports: [CommonModule],
  templateUrl: './employee-list-http.html',
  styleUrl: './employee-list-http.css',
})
export class EmployeeListHttp {
  employeeListService = inject(EmployeeListService);
  employeeData: Observable<Employee[]> | undefined;

  ngOnInit(){
    this.employeeData = this.employeeListService.getAllEmployees();
  }
}
