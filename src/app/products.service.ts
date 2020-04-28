import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "./common/mock/data";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _httpService: HttpClient
  ) {  }

  public getProducts(): Observable<IProduct[]> {
    return this._httpService.get<IProduct[]>(``)
  }

}
