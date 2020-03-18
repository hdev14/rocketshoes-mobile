import {Alert} from 'react-native';
import {call, put, all, select, takeLatest} from 'redux-saga/effects';

import {
  addToCartSuccess,
  updateAmountSuccess,
  updateAmountRequest,
} from './actions';
import api from '../../../services/api';

function* addToCart({id}) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id),
  );

  if (!productExists) {
    const response = yield call(api.get, `/products/${id}`);
    yield put(
      addToCartSuccess({
        ...response.data,
        amount: 1,
      }),
    );
    return;
  }

  yield put(updateAmountRequest(productExists.id, productExists.amount + 1));
}

function* updateAmount({id, amount}) {
  if (amount <= 0) {
    return;
  }

  const stock = yield call(api.get, `/stock/${id}`);
  const amountInStock = stock.data.amount;

  if (!(amount > amountInStock)) {
    yield put(updateAmountSuccess(id, amount));
    return;
  }

  Alert.alert('Quantidade indisponível no estoque.');
}

export default all([
  takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_PRODUCT_AMOUNT_REQUEST', updateAmount),
]);
