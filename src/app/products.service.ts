import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "./store/reducers/products.reducer";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _httpService: HttpClient
  ) {  }

  public getProducts(): Observable<IProduct[]> {
    return this._httpService.get<IProduct[]>(`/?products`);
  }

  public getProduct(id: string): Observable<IProduct[]> {
    return this._httpService.get<IProduct[]>(`/?products/:id=${id}`);
  }


}
