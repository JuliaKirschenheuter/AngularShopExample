import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../common/mock/data";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  @Input()
  public product: IProduct;

  @Input()
  public position: number;

  @Input()
  public isOdd: boolean;

}
