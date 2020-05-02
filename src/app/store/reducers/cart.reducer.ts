import {IProduct} from "./products.reducer";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity"
import {
  ADD_PRODUCT_TO_CART,
  CartProductsAction,
  DECREMENT_PRODUCT_IN_CART,
  INCREMENT_PRODUCT_IN_CART,
  REMOVE_PRODUCT_FROM_CART
} from "../actions/cart.action";
import {createFeatureSelector, createSelector, MemoizedSelector, Selector} from "@ngrx/store";
import {IStore} from "../index";
import {IUser} from "./user.reducer";

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

export const { selectAll } = adapter.getSelectors(createFeatureSelector('cart'));

export const trueProductsCount: MemoizedSelector<IStore, number> = createSelector(
  selectAll, (products: ICartProduct[]) => {
    return products.reduce((count: number, product: ICartProduct) => {
      return count += product.count
    }, 0)
  }
)

export const totalPrice: MemoizedSelector<IStore, number> = createSelector(
  selectAll, (products: ICartProduct[]) => {
    return products.reduce((price: number, product: ICartProduct) => {
      return price += product.price * product.count
    }, 0)
  }
)

export const userSelector: Selector<IStore, IUser> = (state: IStore) => state.user;
export const productsSelector: Selector<IStore, IProduct[]>  = (state: IStore) => state.products;

export const productsWithBonuses: MemoizedSelector<IStore, IProduct[]> = createSelector(
  userSelector, productsSelector, (user: IUser, products: IProduct[]) => {
    return products.map((product: IProduct) => {
      return {
        ...product,
        price: product.price * user.bonuses
      }
    })
  }
)

