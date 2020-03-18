import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART_SUCCESS':
      return produce(state, draftState => {
        draftState.push(action.product);
      });

    case '@cart/UPDATE_PRODUCT_AMOUNT_SUCCESS':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(
          product => product.id === action.id,
        );

        if (productIndex >= 0) {
          draftState[productIndex].amount = action.amount;
        }
      });

    case '@cart/REMOVE_FROM_CART':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(
          product => product.id === action.id,
        );

        if (productIndex >= 0) {
          draftState.splice(productIndex, 1);
        }
      });

    default:
      return state;
  }
}
