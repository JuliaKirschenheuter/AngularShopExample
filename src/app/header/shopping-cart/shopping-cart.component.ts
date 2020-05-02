import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ICartProduct, selectAll} from "../../store/reducers/cart.reducer";
import {Store} from "@ngrx/store";
import {IStore} from "../../store";
import {
  AddProductToCart,
  DecrementProductInCart,
  IncrementProductInCart,
  RemoveProductFromCart
} from "../../store/actions/cart.action";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products$: Observable<ICartProduct[]>

  public constructor(
    private _store: Store<IStore>
  ) { }

  public ngOnInit(): void {
    this.products$ = this._store.select(selectAll)
  }

  public removeProduct(product: ICartProduct) {
    this._store.dispatch(new RemoveProductFromCart(product))
  }

  public incrementProduct(product: ICartProduct) {
    this._store.dispatch(new IncrementProductInCart(product))
  }

  public decrementProduct(product: ICartProduct) {
    this._store.dispatch(new DecrementProductInCart(product))
  }

}
