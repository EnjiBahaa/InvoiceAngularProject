import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../models/product.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Invoice } from '../models/invoice.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  @Input() shoppingCart: Product[];
  invoice: Invoice;
  total: number = 0;
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.total = 0;
    this.shoppingCart.forEach((e) => {
      this.total += e.count * e.unitPrice;
    });
  }

  submit() {
    this.shoppingCartService.AddInvoice(this.shoppingCart).subscribe((data) => {
      this.invoice = data;
      console.log(this.invoice);
      console.log(this.invoice.total);
    });
  }

  deleteProduct(shoppingCart: Product) {
    shoppingCart.count = 0;
    const index = this.shoppingCart.indexOf(shoppingCart);
    this.shoppingCart.splice(index, 1);
  }
}
