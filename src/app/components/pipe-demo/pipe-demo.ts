import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining-pipe';
import { OrdinalPipe } from '../../pipes/ordinal-pipe';
import { CreditcardPipe } from '../../pipes/creditcard-pipe';
import { AgePipe } from '../../pipes/age-pipe';
import { SalutationPipe } from '../../pipes/salutation-pipe';
import { FilterPipe } from '../../pipes/filter-pipe';
import { Disablecopypaste } from '../../directives/disablecopypaste';
import { Charonly } from '../../directives/charonly';
import { MySortPipePipe } from '../../pipes/my-sort-pipe-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pipe-demo',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    OrdinalPipe,
    CreditcardPipe,
    AgePipe,
    SalutationPipe,
    FilterPipe,
    Disablecopypaste,
    Charonly,
    MySortPipePipe,
    FontAwesomeModule,
  ],
  templateUrl: './pipe-demo.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  userName = 'sachIn teNduLkaR';
  salary = 50000;
  dateObj = new Date();

  user = { Name: 'Tom', Address: 'USA', Role: 'Trainee' };
  cars = ['Tata', 'Hyundai', 'Honda', 'Maruthi'];

  msg = 'Hello';
  num = 0;
  creditNum = '';
  dob = '';

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

  searchText = '';

  arr = [10, 50, 20, 5];

  faStar = faStar;

  rating = 0;
  giveRatings(stars: number) {
    if (this.rating == stars) this.rating = 0;
    else this.rating = stars;
  }
}
