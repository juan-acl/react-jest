import { ADD_TO_CART, REMOVE_FROM_CART } from '../../actions/types';
import { reducer } from '../../reducers';
import { ProductMock } from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar initialState', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('AddToCart reducer', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: ADD_TO_CART,
      payload,
    };
    const expexted = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expexted);
  });
  test('RemoveFromCart reducer', () => {
    const initialState = {
      cart: [ProductMock],
    };
    const payload = ProductMock;
    const action = {
      type: REMOVE_FROM_CART,
      payload,
    };
    const expected = {
      cart: [],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
