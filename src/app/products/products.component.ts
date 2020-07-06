import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];
  search: string = '';
  showContent: boolean = false;

  constructor() {}
  // private productsService: ProductsService
  ngOnInit(): void {
    setTimeout(() => (this.showContent = true), 2000);

    // this.productsService.getProducts().subscribe((data) => {
    //   this.products = data;
    //   console.log(this.products);
    // });
  }
}
