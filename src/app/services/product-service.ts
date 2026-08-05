import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class ProductService {
    product_api = "https://fakestoreapi.com/products";

    httpClient = inject(HttpClient);

    getProducts(){
        return this.httpClient.get(this.product_api);
    }
}
