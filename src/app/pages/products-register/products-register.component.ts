import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../interfaces/Product';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-register',
  imports: [ReactiveFormsModule],
  templateUrl: './products-register.component.html',
  styleUrl: './products-register.component.scss',
})
export class ProductsRegisterComponent {
  productForm: FormGroup;
  dataForm: IProduct = {};
  constructor(
    private productsService: ProductsService,
    private router: Router,

    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      available: [false],
    });
  }

  public saveProduct(): void {
    console.log(this.productForm);
    if (this.productForm.valid) {
      console.log('Formulário enviado:', this.productForm.value);
      this.productsService
        .saveProduct(this.productForm.value)
        .subscribe((response) => {
          if (response.status === 201) {
            this.goToList();
          }
        });
    } else {
      console.log('Formulário inválido!');
      return;
    }
  }

  public goToList(): void {
    this.router.navigate(['/products-list']);
  }
}
