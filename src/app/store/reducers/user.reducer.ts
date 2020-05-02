export interface IUser {
  name: string,
  bonuses: number
}

const initialState: IUser = {
  name: 'max',
  bonuses: 0.8
};

export function userReducer(state: IUser = initialState, action: any) {
  return state
}
