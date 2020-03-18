import React, {Component} from 'react';
import {Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import * as CartActions from '../../store/modules/cart/actions';

import Container from '../../styles/Container';
import {
  CartSection,
  ProductList,
  Product,
  ProductImg,
  ProductDetails,
  ProductName,
  ProductValue,
  TrashButton,
  ProductAmount,
  Amount,
  AmountInput,
  AmountIcon,
  Subtotal,
  CartFooter,
  Total,
  TotalText,
  TotalValue,
  CartFooterButton,
  CartFooterButtonText,
  CartEmpty,
} from './styles';

class Cart extends Component {
  render() {
    const {updateAmountRequest, removeFromCart, cart, total} = this.props;

    return (
      <Container>
        <CartSection>
          {cart.length !== 0 ? (
            <>
              <ProductList
                data={cart}
                extractKey={item => item.id}
                renderItem={({item}) => (
                  <View key={item}>
                    <Product>
                      <ProductImg source={{uri: item.image}} />

                      <ProductDetails>
                        <ProductName>{item.title}</ProductName>
                        <ProductValue>{item.formatedPrice}</ProductValue>
                      </ProductDetails>

                      <TrashButton onPress={() => removeFromCart(item.id)}>
                        <Icon name="trash-2" color="#333" size={25} />
                      </TrashButton>
                    </Product>

                    <ProductAmount>
                      <Amount>
                        <AmountInput
                          defaultValue={String(item.amount)}
                          onChangeText={text =>
                            updateAmountRequest(item.id, Number(text))
                          }
                        />
                        <AmountIcon name="tag" color="#333" size={25} />
                      </Amount>
                      <Subtotal>{item.subtotal}</Subtotal>
                    </ProductAmount>
                  </View>
                )}
              />

              <CartFooter>
                <Total>
                  <TotalText>total</TotalText>
                  <TotalValue>{total}</TotalValue>
                </Total>
                <CartFooterButton>
                  <CartFooterButtonText>finalizar pedido</CartFooterButtonText>
                </CartFooterButton>
              </CartFooter>
            </>
          ) : (
            <CartEmpty>
              <Icon name="shopping-cart" color="#ddd" size={60} />
              <Text style={{color: '#ddd', fontWeight: 'bold', fontSize: 20}}>
                Carrinho está vázio
              </Text>
            </CartEmpty>
          )}
        </CartSection>
      </Container>
    );
  }
}

const mapStateProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    formatedPrice: `R$ ${product.price.toLocaleString('pt-BR')}`,
    subtotal: `R$ ${(product.price * product.amount).toLocaleString('pt-BR')}`,
  })),
  total: ` R$ ${state.cart
    .reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
    .toLocaleString('pt-BR')}`,
});

const mapDispatch = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateProps,
  mapDispatch,
)(Cart);
