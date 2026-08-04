import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {

  employeeInfo = inject(EmployeeService);

  selectedEmployees = [...this.employeeInfo.getAllEmployees()]

  filterEmp(value: string) {

    switch (value) {
      case 'maleEmployees':
        this.selectedEmployees = this.employeeInfo.getMaleEmployees();
        break;
      case 'femaleEmployees':
        this.selectedEmployees = this.employeeInfo.getFemaleEmployees();
        break;
      default:
        this.selectedEmployees = this.employeeInfo.getAllEmployees();
        break;
    }
  }

}
