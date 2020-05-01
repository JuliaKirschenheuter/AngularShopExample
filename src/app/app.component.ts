import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./products.service";
import {IStore} from "./store";
import {Store} from "@ngrx/store";
import {GetProductsPending} from "./store/actions/products.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public logo = 'assets/img/logo.png';
  public text = '';
  public products$;

  public constructor(
    private _productsService: ProductsService,
    private _store: Store<IStore>
  ) {
  }

  ngOnInit(): void {

    this._store.dispatch(new GetProductsPending())
    this.products$ = this._store.select('products')

  }




}
