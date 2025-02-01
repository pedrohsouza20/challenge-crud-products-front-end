import { IProduct } from './interfaces/Product';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';
import { NgFor } from '@angular/common';
NgFor;
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'challenge-crud-products-front-end';
  private productsList: IProduct[] = [];

  constructor(private produtsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.produtsService.getProducts().subscribe((response) => {
      console.log(response);
      this.productsList = response;
    });
  }

  public setProductsList(productsList: IProduct[]): void {
    this.productsList = productsList;
  }

  public getProductsList(): IProduct[] {
    return this.productsList;
  }
}
