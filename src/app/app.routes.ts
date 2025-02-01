import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsRegisterComponent } from './pages/products-register/products-register.component';

export const routes: Routes = [
  {
    path: 'products-list',
    component: ProductsListComponent,
    pathMatch: 'full',
  },
  {
    path: 'products-register',
    component: ProductsRegisterComponent,
    pathMatch: 'full',
  },
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
];
