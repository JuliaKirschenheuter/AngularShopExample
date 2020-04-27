import {Component, OnDestroy, OnInit} from '@angular/core';
import {data$, IProduct} from "./common/mock/data";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public logo = 'assets/img/logo.png';
  public products = data$;
  public subscription;
  public control$$ = new Subject();


}
