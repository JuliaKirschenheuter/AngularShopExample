import {Route} from "@angular/router";
import {ProductsComponent} from "./content/products/products.component";
import {SignupComponent} from "./content/signup/signup.component";
import {ProductListComponent} from "./content/products/product-list/product-list.component";
import {OneProductComponent} from "./content/products/one-product/one-product.component";


export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      }, {
        path: ':id',
        component: OneProductComponent
      }, {
        path: '**',
        redirectTo: '/registration'
      }
    ]
  },
  {
    path: 'registration',
    component: SignupComponent
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];
