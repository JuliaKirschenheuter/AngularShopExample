import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICartProduct} from "../../../store/reducers/cart.reducer";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public product: ICartProduct;

  @Output()
  public remove: EventEmitter<ICartProduct> = new EventEmitter<ICartProduct>()

  @Output()
  public increment: EventEmitter<ICartProduct> = new EventEmitter<ICartProduct>()

  @Output()
  public decrement: EventEmitter<ICartProduct> = new EventEmitter<ICartProduct>()

  public removeProduct(product: ICartProduct) {
    this.remove.emit(product)
  }

  public incrementProduct(product: ICartProduct) {
    this.increment.emit(product)
  }

  public decrementProduct(product: ICartProduct) {
    if (product.count === 1) {
      this.remove.emit(product);
      return;
    }
    this.decrement.emit(product)
  }

}
