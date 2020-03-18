import React, {Component} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import api from '../../services/api';

import {addToCartRequest} from '../../store/modules/cart/actions';

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
  ProductAmount,
} from './styles';

class Home extends Component {
  state = {
    products: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({
      products: response.data,
      loading: false,
    });
  }

  handleAddToCart = id => {
    const {addToCart} = this.props;
    addToCart(id);
  };

  renderItem = ({item}) => {
    const {amounts} = this.props;

    return (
      <Product>
        <ProductImg source={{uri: item.image}} />
        <ProductName>{item.title}</ProductName>
        <ProductValue>R$ {item.price}</ProductValue>

        <ProductButton
          title="button"
          onPress={() => this.handleAddToCart(item.id)}>
          <ProductAmount>
            <CartIcon name="shopping-cart" color="#ddd" size={25} />
            <Text style={{color: '#ddd', fontSize: 18, fontWeight: 'bold'}}>
              {amounts[item.id] || 0}
            </Text>
          </ProductAmount>
          <ProductButtonText>adicionar</ProductButtonText>
        </ProductButton>
      </Product>
    );
  };

  render() {
    const {products, loading} = this.state;

    return (
      <Container>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#ddd"
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ) : (
          <ProductList
            horizontal
            data={products}
            extractorKey={item => `product-${item.id}`}
            renderItem={this.renderItem}
          />
        )}
      </Container>
    );
  }
}

const mapStateProps = state => ({
  amounts: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, []),
});

const mapDispatch = dispatch => ({
  addToCart: id => dispatch(addToCartRequest(id)),
});

export default connect(
  mapStateProps,
  mapDispatch,
)(Home);
