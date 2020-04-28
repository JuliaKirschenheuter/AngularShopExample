import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {BASE_URL_TOKEN} from "../../config";
import {filter, map, tap} from "rxjs/operators";


interface IRes {
  data: any
}

@Injectable({
  providedIn: 'root'
})

export class CustomInterceptorService implements HttpInterceptor{

  constructor(
    @Inject(BASE_URL_TOKEN) private _baseUrl: string
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: HttpHeaders =
      request.headers
      .append('Content-Type', 'application/json')
      .append('Connection', 'keep-alive');

    const jsonRequest = request.clone({
      headers,
      url: `${this._baseUrl}${request.url}`
    });

    return next.handle(jsonRequest)
      .pipe(
        tap((event: HttpEvent<any>) => {
          console.log('event: ', event)
        }),
        filter(this._isHttpResponse),
        map((response: HttpResponse<IRes>) => {
          return response.clone({
            body: response.body.data
          })
        })
      )
  }

  private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<IRes> {
    if (event instanceof HttpResponse) {
      return true;
    } else {
      return false;
    }
  }
}
