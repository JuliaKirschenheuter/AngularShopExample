import {IProduct} from "./products.reducer";
import {
  CurrentProductAction,
  GET_CURRENT_PRODUCT_ERROR,
  GET_CURRENT_PRODUCT_SUCCESS, GetCurrentProductSuccess
} from "../actions/current-product.action";

const initialState: IProduct = {
  '_id': '',
  'title': '',
  'serial': 0,
  'author': '',
  'price': 0,
  'src': '',
};

export function currentProductReducer(state: IProduct = initialState, action: CurrentProductAction) {
  switch (action.type) {
    case GET_CURRENT_PRODUCT_SUCCESS:
      return (action as GetCurrentProductSuccess).payload;

    case GET_CURRENT_PRODUCT_ERROR:
      return null;

    default:
      return state
  }
}
