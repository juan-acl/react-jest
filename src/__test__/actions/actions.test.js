import actions from '../../actions';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../actions/types';
import { ProductMock } from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('AddToCart action', () => {
    const payload = ProductMock;
    const expected = {
      type: ADD_TO_CART,
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('RemoveFromCart', () => {
    const payload = ProductMock;
    const expected = {
      type: REMOVE_FROM_CART,
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
