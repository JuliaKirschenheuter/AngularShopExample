import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../store/reducers/products.reducer";
import {Store} from "@ngrx/store";
import {IStore} from "../store";
import {AddProductToCart} from "../store/actions/cart.action";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public constructor(
    private _store: Store<IStore>
  ) {
  }

  ngOnInit(): void {
  }

  @Input()
  public product: IProduct;

  @Input()
  public position: number;

  @Input()
  public isOdd: boolean;

  public addProductToCart(product: IProduct): void {
    this._store.dispatch(new AddProductToCart(product))
  }

}
