import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  ProductList,
  Product,
  ProductImg,
  ProductName,
  ProductValue,
  ProductButton,
  ProductButtonText,
} from './styles';

export default function Home() {
  return (
    <Product>
      <ProductName>Tênis 1</ProductName>
      <ProductValue>R$ 123,00</ProductValue>

      <ProductButton title="button">
        <Icon name="shopping-cart" color="#333" size={39} />
        <ProductButtonText>adicionar</ProductButtonText>
      </ProductButton>
    </Product>
  );
}
