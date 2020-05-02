import {ActionReducerMap} from "@ngrx/store";
import {IProduct, productsReducer} from "./reducers/products.reducer";
import {cartReducer, ICartProduct} from "./reducers/cart.reducer";
import {EntityState} from "@ngrx/entity";
import {IUser, userReducer} from "./reducers/user.reducer";

export interface IStore {
  products: IProduct[],
  cart: EntityState<ICartProduct>,
  user: IUser
}

export const reducers: ActionReducerMap<any> =  {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer
}
