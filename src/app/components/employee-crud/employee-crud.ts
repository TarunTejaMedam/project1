import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'awesome-snackbar';
import { FormsModule } from '@angular/forms';
import { USER_ADDED, USER_DELETED } from '../../constants/message_constants';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from '../employee-add/employee-add';

@Component({
  selector: 'app-employee-crud',
  imports: [FontAwesomeModule, FormsModule, EmployeeTable, EmployeeAdd],
  templateUrl: './employee-crud.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './employee-crud.css',
})
export class EmployeeCRUD {
  faTrash = faTrash;
  faEye = faEye;
  faPlus = faPlus;

  employees = [
    {
      id: 1,
      name: 'Amit Sharma',
      role: 'Manager',
      salary: 85000,
      status: 'Active',
      gender: 'male',
    },
    {
      id: 2,
      name: 'Priya Verma',
      role: 'Developer',
      salary: 65000,
      status: 'Active',
      gender: 'female',
    },
    {
      id: 3,
      name: 'Rahul Mehta',
      role: 'Tester',
      salary: 38000,
      status: 'Inactive',
      gender: 'male',
    },
    {
      id: 4,
      name: 'Sneha Iyer',
      role: 'Developer',
      salary: 42000,
      status: 'Inactive',
      gender: 'female',
    },
    {
      id: 5,
      name: 'Karan Singh',
      role: 'Manager',
      salary: 52000,
      status: 'Active',
      gender: 'male',
    },
    {
      id: 6,
      name: 'Neha Gupta',
      role: 'Tester',
      salary: 72000,
      status: 'Active',
      gender: 'female',
    },
  ];

  filEmployees = [...this.employees];

  deleteEmp(id: any) {
    new Snackbar(USER_DELETED, {
      position: 'top-center',
      theme: 'light',
      timeout: 5000,
      actionText: 'X',
    });
    this.filEmployees = this.filEmployees.filter((emp) => emp.id != id);
  }

  selectedEmp: any = null;

  viewEmp(emp: any) {
    this.selectedEmp = emp;
  }

  addEmp(empData: any) {
    this.filEmployees.push({
      id: this.filEmployees.length + 1,
      name: empData.name,
      role: empData.role,
      salary: empData.salary,
      status: empData.status,
      gender: empData.gender,
    });

    new Snackbar(USER_ADDED, {
      position: 'top-center',
      theme: 'light',
      timeout: 5000,
      actionText: 'X',
    });
  }
}
