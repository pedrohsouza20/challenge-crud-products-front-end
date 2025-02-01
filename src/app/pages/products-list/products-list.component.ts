import { Router, Routes } from '@angular/router';
import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/Product';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [NgFor],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  private productsList: IProduct[] = [];

  title = 'challenge-crud-products-front-end';
  constructor(
    private produtsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public goToRegister(): void {
    this.router.navigate(['/products-register']);
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
