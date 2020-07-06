import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpclient: HttpClient) {}

  getProducts() {
    return this.httpclient.get<Product[]>(
      `https://localhost:44349/api/Product`
    );
  }
}
