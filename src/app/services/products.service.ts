import { IProduct } from './../interfaces/Product';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  public saveProduct(
    productData: IProduct
  ): Observable<HttpResponse<IProduct>> {
    return this.http
      .post<IProduct>(this.apiUrl, productData, {
        observe: 'response',
      })
      .pipe(
        catchError((error) => {
          console.error('erro ao adicionar produto', error);
          throw error;
        })
      );
  }
}
