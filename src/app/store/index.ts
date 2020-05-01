import {ActionReducerMap} from "@ngrx/store";
import {IProduct, productsReducer} from "./reducers/products.reducer";

export interface IStore {
  products: IProduct[]
}

export const reducers: ActionReducerMap<any> =  {
  products: productsReducer
}
