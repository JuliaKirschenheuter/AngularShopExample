import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../products.service";
import {Store} from "@ngrx/store";
import {IStore} from "../../store";
import {GetProductsPending} from "../../store/actions/products.action";
import {productsWithBonuses} from "../../store/reducers/cart.reducer";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products$;

  public constructor(
    private _productsService: ProductsService,
    private _store: Store<IStore>
  ) {
  }

  ngOnInit(): void {

    this._store.dispatch(new GetProductsPending())
    this.products$ = this._store.select(productsWithBonuses)

  }

}
