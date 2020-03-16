import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {TouchCart, ProductQuantity} from './styles';

export default function CartButton() {
  return (
    <TouchCart>
      <ProductQuantity>2</ProductQuantity>
      <Icon name="shopping-bag" color="#fff" size={25} />
    </TouchCart>
  );
}
