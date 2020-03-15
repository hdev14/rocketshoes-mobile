import React from 'react';

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
    <ProductList>
      <Product>
        <ProductImg source={{uri: ''}} />
        <ProductName />
        <ProductValue />
        <ProductButton>
          <ProductButtonText>adicionar</ProductButtonText>
        </ProductButton>
      </Product>
    </ProductList>
  );
}
