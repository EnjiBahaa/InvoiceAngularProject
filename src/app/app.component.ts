import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: Product[];

  shoppingCart: Product[];
  title = 'Wasmah-project';
  pageIndex = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  changeIndex(indexToChange) {
    this.pageIndex = indexToChange;
    if (indexToChange == 2) {
      this.shoppingCart = this.products.filter((p) => p.count);
      console.log(this.shoppingCart);
    }
  }

  // deleteProduct(shoppingCart: Product) {
  //   shoppingCart.count = 0;
  //   const index = this.shoppingCart.indexOf(shoppingCart);
  //   this.shoppingCart.splice(index, 1);
  // }
}
