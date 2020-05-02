import {IProduct} from "./products.reducer";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity"
import {
  ADD_PRODUCT_TO_CART,
  CartProductsAction,
  DECREMENT_PRODUCT_IN_CART,
  INCREMENT_PRODUCT_IN_CART,
  REMOVE_PRODUCT_FROM_CART
} from "../actions/cart.action";
import {createFeatureSelector} from "@ngrx/store";

export interface ICartProduct extends IProduct{
  count: number;
}

export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter({
  selectId: (product: ICartProduct) => product._id
});

const initialState: EntityState<ICartProduct> = adapter.getInitialState([])

export function cartReducer(state: EntityState<ICartProduct> = initialState, action: CartProductsAction) {
  switch (action.type) {

    case ADD_PRODUCT_TO_CART: {
      const entity: ICartProduct = state.entities[action.payload._id];
      return adapter.upsertOne( {
        ...action.payload,
        count: entity ? entity.count + 1 : 1
      }, state)
    }
    case REMOVE_PRODUCT_FROM_CART:
      return adapter.removeOne(action.payload._id, state);

    case INCREMENT_PRODUCT_IN_CART:
      return adapter.updateOne({
        id: action.payload._id,
        changes: {
          count: action.payload.count + 1
        }
      }, state);

    case DECREMENT_PRODUCT_IN_CART:
      return adapter.updateOne({
        id: action.payload._id,
        changes: {
          count: action.payload.count - 1
        }
      }, state);
    default:
      return state;
  }
}

export const { selectAll } = adapter.getSelectors(createFeatureSelector('cart'))
