import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, FilterPipe],
  imports: [CommonModule, FormsModule, HttpClientModule, HttpClient],
  exports: [ProductsComponent],
})
export class ProductsModule {}
