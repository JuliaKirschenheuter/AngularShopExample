import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { IStore } from '../../../store';
import { GetCurrentProductPending } from '../../../store/actions/current-product.action';
import { map, skip, take } from 'rxjs/operators';
import {IProduct} from "../../../store/reducers/products.reducer";

@Injectable()
export class ResolveService implements Resolve<IProduct | null> {

  constructor(
    private _router: Router,
    private _store: Store<IStore>
  ) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct | null> {
    // debugger
    this._store.dispatch(new GetCurrentProductPending(route.params.id));
    return this._store.select('currentProduct')
      .pipe(
        skip(1),
        take(1),
        map((product: IProduct | null) => {
          if (!product) {
            this._router.navigate(['/products']);
            return product;
          }
          return product;
        })
      );
  }

}
