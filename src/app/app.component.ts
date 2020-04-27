import {Component, OnDestroy, OnInit} from '@angular/core';
import {data$, IProduct} from "./common/mock/data";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  public logo = 'assets/img/logo.png';
  public products;
  public subscription;
  public control$$ = new Subject();

  ngOnInit(): void {
    this.subscription = data$.pipe(takeUntil(this.control$$)).subscribe((products: IProduct[]) => {
      this.products = products;
    });
  }

  ngOnDestroy(): void {
    this.control$$.next(true);
  }

}
