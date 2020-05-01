import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./products.service";

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
    private _productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.products$ = this._productsService.getProducts();
  }




}
