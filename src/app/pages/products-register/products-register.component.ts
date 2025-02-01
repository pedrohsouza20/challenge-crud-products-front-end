import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-register',
  imports: [],
  templateUrl: './products-register.component.html',
  styleUrl: './products-register.component.scss',
})
export class ProductsRegisterComponent {
  constructor(private router: Router) {}
  public goToList(): void {
    this.router.navigate(['/products-list']);
  }
}
