import {GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GetProductsSuccess, ProductsAction} from "../actions/products.action";

export interface IProduct {
  '_id': string;
  'title': string;
  'serial': number;
  'author': string;
  'price': number;
  'src': string;
}

const initialState: IProduct[] = [];

export function productsReducer(state: IProduct[] = initialState, action: ProductsAction) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return (action as GetProductsSuccess).payload;

    case GET_PRODUCTS_ERROR:
      return state;

    default:
      return state
  }
}
