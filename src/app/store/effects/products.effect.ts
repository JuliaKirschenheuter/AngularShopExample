import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {GET_PRODUCTS_PENDING, GetProductsError, GetProductsSuccess} from "../actions/products.action";
import {ProductsService} from "../../products.service";
import {IProduct} from "../reducers/products.reducer";

@Injectable()
export class ProductsEffects {

  @Effect()
  products$ = this.actions$
    .pipe(
      ofType(GET_PRODUCTS_PENDING),
      switchMap(() => this._productsService$.getProducts()
        .pipe(
          map((products: IProduct[] ) => new GetProductsSuccess(products)),
          catchError((err) => of( new GetProductsError(err)))
        ))
    );

  constructor(
    private actions$: Actions,
    private _productsService$: ProductsService
  ) {}
}
