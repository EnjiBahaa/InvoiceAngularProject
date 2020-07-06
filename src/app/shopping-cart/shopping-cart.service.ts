import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from './../models/invoice.model';
import { Subject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  InvoiceSent: Subject<Invoice>;

  constructor(private httpClient: HttpClient) {
    this.InvoiceSent = new Subject<Invoice>();
  }

  AddInvoice(products: Product[]): Observable<Invoice> {
    this.httpClient
      .post<Invoice>(`https://localhost:44349/api/Invoice/AddInvoice`, products)
      .subscribe((data) => this.InvoiceSent.next(data));
    return this.InvoiceSent;
  }

  // CalculateInvoice(products : Product[]) : Observable<number>
  // {
  //   this.httpClient.get<number>(`https://localhost:44349/api/Invoice/CalculateInvoice/`)
  // }
}
