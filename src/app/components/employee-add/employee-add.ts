import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs: ['addEmpEvent'],
})
export class EmployeeAdd {
  faPlus = faPlus;
  name = '';
  role = '';
  salary = 0;
  status = '';
  gender = '';

  addEmpEvent = new EventEmitter();
  sendAddEmp(){

    let employee = {
      name: this.name,
      role: this.role,
      salary: this.salary,
      status: this.status,
      gender: this.gender
    }
    this.addEmpEvent.emit(employee);

    this.name = '';
    this.role = '';
    this.salary = 0;
    this.status = '';
    this.gender = '';
  }
}
