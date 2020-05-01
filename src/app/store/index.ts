import {ActionReducerMap} from "@ngrx/store";
import {productsReducer} from "./reducers/products.reducer";

export const reducers: ActionReducerMap<any> =  {
  products: productsReducer
}
