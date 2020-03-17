import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draftState => {
        const productIndex = draftState.findIndex(
          product => product.id === action.product.id,
        );

        if (productIndex >= 0) {
          draftState[productIndex].amount += 1;
        } else {
          draftState.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case 'UPDATE_PRODUCT_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draftState => {
        const productIndex = draftState.findIndex(
          product => product.id === action.id,
        );

        if (productIndex >= 0) {
          draftState[productIndex].amount = action.amount;
        }
      });
    }

    case 'REMOVE_FROM_CART':
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
