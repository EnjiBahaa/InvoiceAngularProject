import { Product } from './product.model';

export interface Invoice {
  id: number;
  total: number;
  products: Product[];
}
