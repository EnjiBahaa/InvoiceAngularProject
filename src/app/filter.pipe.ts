import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr: Product[], name: string): Product[] {
    if (!name) {
      return arr;
    }
    return arr.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}
