import { Routes } from '@angular/router';
import { ProductsComponent } from './ui/products/products';
import { CustomersComponent } from './ui/customers/customers';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];
