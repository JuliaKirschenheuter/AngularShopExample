import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "./common/mock/data";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _httpService: HttpClient,
    @Inject('BASE_URL') private _baseUrl: string
  ) {  }

  public getProducts(): Observable<IProduct[]> {
    return this._httpService.get<{data: IProduct[]}>(this._baseUrl)
      .pipe(
        map((response: {data: IProduct[]}) => response.data)
      )
  }

}
