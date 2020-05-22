import {Route} from "@angular/router";
import {ProductsComponent} from "./content/products/products.component";
import {SignupComponent} from "./content/signup/signup.component";
import {ProductListComponent} from "./content/products/product-list/product-list.component";
import {OneProductComponent} from "./content/products/one-product/one-product.component";
import {ResolveService} from "./content/products/one-product/resolve.service";
import {CdComponent} from './content/cd/cd.component';


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
      },
      {
        path: ':id',
        component: OneProductComponent,
        data: {
          title: 'One product page'
        },
        resolve: {
          product: ResolveService
        }
      },
      {
        path: '**',
        redirectTo: '/registration',
      }
    ]
  },
  {
    path: 'registration',
    loadChildren: () => import('./content/signup/signup.module')
      .then((m) => m.SignupModule)
  },
  {
    path: 'cd',
    component: CdComponent
  },
  {
    path: '**',
    redirectTo: 'products',
  }
];
