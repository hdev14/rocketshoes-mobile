export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_TO_CART_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_TO_CART_SUCCESS',
    product,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_PRODUCT_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_PRODUCT_AMOUNT_SUCCESS',
    id,
    amount,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id,
  };
}
