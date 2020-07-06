import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
})
export class ShoppingItemComponent implements OnInit {
  @Input() shoppingItem: Product;
  checkResult: boolean = true;
  @Output('onDelete') deleteEvent = new EventEmitter<Product>();

  constructor() {}

  incCount() {
    if (this.shoppingItem.count >= this.shoppingItem.availableQuantity) {
      this.shoppingItem.count = this.shoppingItem.availableQuantity;
      this.checkResult = false;
    } else {
      this.shoppingItem.count += 1;
      this.checkResult = true;
    }
  }

  decCount() {
    this.shoppingItem.count -= 1;
    if (this.shoppingItem.count == 0) {
      this.delete();
    }
  }

  delete() {
    this.deleteEvent.emit(this.shoppingItem);
  }

  ngOnInit() {}
}
