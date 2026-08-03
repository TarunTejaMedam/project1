import { Component, ChangeDetectionStrategy } from '@angular/core';
import productData from './product-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faUsd } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { Charonly } from '../../directives/charonly';
import { Disablecopypaste } from '../../directives/disablecopypaste';

@Component({
  selector: 'app-product-list',
  imports: [FontAwesomeModule, NgxPaginationModule, Charonly, Disablecopypaste],
  templateUrl: './product-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = productData;
  faStar = faStar;
  faUsd = faUsd;
  p = 1;

  filProductArr = [...this.productArr];
  search(event: any) {
    let s = event.target.value;
    this.filProductArr = this.productArr.filter((prod) =>
      prod.title.toLowerCase().includes(s.toLowerCase()),
    );
  }

  sort(type: string) {
    if (type == 'A') {
      this.filProductArr = this.productArr.sort((a, b) => a.price - b.price);
    } else if (type == 'D') this.filProductArr = this.productArr.sort((a, b) => b.price - a.price);
  }

  openSweetAlert() {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
      timer: 5000,
      draggable: true,
    });
  }

  openSnackBar() {
    new Snackbar('Helloooo, Good Morning', {
      position: 'top-center',
      theme: 'light',
      timeout: 5000,
      actionText: 'X',
    });
  }
}
