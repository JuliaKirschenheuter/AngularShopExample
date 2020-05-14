import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, ParamMap} from "@angular/router";

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'))
    })
    this._activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      console.log(params.get('page'))
    })
    this._activatedRoute.fragment.subscribe((fragment: string) => {
      console.log(fragment)
    })
    this._activatedRoute.data.subscribe((data: Data) => {
      console.log(data.product);
    })

  }

}
