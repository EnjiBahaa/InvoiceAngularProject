import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  incCount() {
    if (isNaN(this.product.count)) {
      this.product.count = 1;
    } else {
      this.product.count += 1;
    }
    console.log(this.product);
    console.log(this.product.count);
  }

  decCount() {
    this.product.count -= 1;
  }
  ngOnInit(): void {}
}
