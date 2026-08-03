import { Component, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-table',
  imports: [FontAwesomeModule],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs: ['employeesObj'],
  changeDetection: ChangeDetectionStrategy.Eager,
  outputs: ['deleteEmpEvent'],
})
export class EmployeeTable {
  faTrash = faTrash;
  employeesObj: any;

  deleteEmpEvent = new EventEmitter();
  sendDeleteEmp(empID: any) {
    this.deleteEmpEvent.emit(empID);
  }
}
