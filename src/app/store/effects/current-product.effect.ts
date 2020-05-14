import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, concatAll, find, map, switchMap} from 'rxjs/operators';
import {ProductsService} from "../../products.service";
import {IProduct} from "../reducers/products.reducer";
import {
  GET_CURRENT_PRODUCT_PENDING, GetCurrentProductError,
  GetCurrentProductPending,
  GetCurrentProductSuccess
} from "../actions/current-product.action";

@Injectable()
export class CurrentProductEffects {

  @Effect()
  product$ = this._actions$
    .pipe(
      ofType(GET_CURRENT_PRODUCT_PENDING),
      switchMap((action: GetCurrentProductPending) => this._productsService$.getProduct(action.payload)
        .pipe(
          concatAll(),
          find((product: IProduct) => product._id === action.payload),
          map((product: IProduct) => new GetCurrentProductSuccess(product)),
          catchError((err) => of(new GetCurrentProductError(err)))
        ))
    );

  constructor(
    private _actions$: Actions,
    private _productsService$: ProductsService
  ) {}
}
