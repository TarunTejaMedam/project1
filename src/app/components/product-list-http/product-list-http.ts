import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list-http',
  imports: [],
  templateUrl: './product-list-http.html',
  styleUrl: './product-list-http.css',
})
export class ProductListHTTP {

  productService = inject(ProductService);
  productList: any =signal([]);
  isLoading: any = signal(false);

  fetchData(){
    this.isLoading.set(true);
    this.productService.getProducts().subscribe((response: any) => {
      this.productList.set(response);
      this.isLoading.set(false);
    });
  }
}
