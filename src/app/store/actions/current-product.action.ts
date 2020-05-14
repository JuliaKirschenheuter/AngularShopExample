import {IProduct} from "../reducers/products.reducer";

export const GET_CURRENT_PRODUCT_PENDING = 'GET_CURRENT_PRODUCT_PENDING';
export const GET_CURRENT_PRODUCT_SUCCESS = 'GET_CURRENT_PRODUCT_SUCCESS';
export const GET_CURRENT_PRODUCT_ERROR = 'GET_CURRENT_PRODUCT_ERROR';

export class GetCurrentProductPending {
  public readonly type = GET_CURRENT_PRODUCT_PENDING;
  public constructor(public payload: string) {}
}

export class GetCurrentProductSuccess {
  public readonly type = GET_CURRENT_PRODUCT_SUCCESS;
  public constructor(public payload: IProduct) {
  }
}

export class GetCurrentProductError {
  public readonly type = GET_CURRENT_PRODUCT_ERROR;
  public constructor(public payload: any) {
  }
}

export type CurrentProductAction = GetCurrentProductPending | GetCurrentProductSuccess | GetCurrentProductError;
