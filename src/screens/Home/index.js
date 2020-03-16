import React, {Component} from 'react';

import api from '../../services/api';

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

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({
      products: response.data,
    });
  }

  renderItem = product => (
    <Product>
      <ProductImg source={{uri: product.image}} />
      <ProductName>{product.title}</ProductName>
      <ProductValue>{product.price}</ProductValue>

      <ProductButton title="button">
        <CartIcon name="shopping-cart" color="#ddd" size={25} />
        <ProductButtonText>adicionar</ProductButtonText>
      </ProductButton>
    </Product>
  );

  render() {
    const {products} = this.state;

    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          extractkeyExtrator={item => item.id}
          renderItem={({item}) => this.renderItem(item)}
        />
      </Container>
    );
  }
}
