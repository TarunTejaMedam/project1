import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { FormsModule } from '@angular/forms';
import { USER_ADDED } from '../../constants/message_constants';
import { Charonly } from '../../directives/charonly';
import { Disablecopypaste } from '../../directives/disablecopypaste';

@Component({
  selector: 'app-employee-crud',
  imports: [FontAwesomeModule, FormsModule, Charonly, Disablecopypaste],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCRUD {

  faTrash = faTrash;
  faEye = faEye;
  faPlus = faPlus;

  employees = [
    { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
    { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
    { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
    { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
    { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
    { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
  ];

  filEmployees = [...this.employees];

  deleteEmp(id: number) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.filEmployees = this.filEmployees.filter(emp => emp.id != id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  selectedEmp: any = null;

  viewEmp(emp: any) {
    this.selectedEmp = emp;
  }

  name = '';
  role = '';
  salary = 0;
  status = '';
  gender = '';

  addEmp() {
    this.filEmployees.push({
      id: this.filEmployees.length + 1,
      name: this.name,
      role: this.role,
      salary: this.salary,
      status: this.status,
      gender: this.gender
    });

    this.name = '';
    this.role = '';
    this.salary = 0;
    this.status = '';
    this.gender = '';

    new Snackbar(USER_ADDED,
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}
