import React from 'react';

import Container from '../../styles/Container';

import {
  CartIcon,
  ProductList,
  Product,
  ProductImg,
  ProductName,
  ProductValue,
  ProductButton,
  ProductButtonText,
} from './styles';

export default function Home() {
  const data = [1, 2, 3, 4];

  return (
    <Container>
      <ProductList
        horizontal
        data={data}
        extractKey={item => item}
        renderItem={({item}) => (
          <Product>
            <ProductImg
              source={{
                uri:
                  'data:image/jpeg;base64,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',
              }}
            />
            <ProductName>Tênis de Caminhada Leve Confortável</ProductName>
            <ProductValue>R$ 123,00</ProductValue>

            <ProductButton title="button">
              <CartIcon name="shopping-cart" color="#ddd" size={25} />
              <ProductButtonText>adicionar</ProductButtonText>
            </ProductButton>
          </Product>
        )}
      />
    </Container>
  );
}
