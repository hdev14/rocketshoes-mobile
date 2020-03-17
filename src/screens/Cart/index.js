import React, {Component} from 'react';
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
} from './styles';

class Cart extends Component {
  render() {
    const {updateAmount, removeFromCart, cart} = this.props;

    return (
      <Container>
        <CartSection>
          <ProductList
            data={cart}
            extractKey={item => item.id}
            renderItem={({item}) => (
              <View key={item}>
                <Product>
                  <ProductImg source={{uri: item.image}} />

                  <ProductDetails>
                    <ProductName>{item.title}</ProductName>
                    <ProductValue>R$ {item.price}</ProductValue>
                  </ProductDetails>

                  <TrashButton onPress={() => removeFromCart(item.id)}>
                    <Icon name="trash-2" color="#333" size={25} />
                  </TrashButton>
                </Product>

                <ProductAmount>
                  <Amount>
                    <AmountInput
                      defaultValue={String(item.amount)}
                      onChangeText={text => updateAmount(item.id, Number(text))}
                    />
                    <AmountIcon name="tag" color="#333" size={25} />
                  </Amount>
                  <Subtotal>R$ 120,00</Subtotal>
                </ProductAmount>
              </View>
            )}
          />

          <CartFooter>
            <Total>
              <TotalText>total</TotalText>
              <TotalValue>R$ 120,00</TotalValue>
            </Total>
            <CartFooterButton>
              <CartFooterButtonText>finalizar pedido</CartFooterButtonText>
            </CartFooterButton>
          </CartFooter>
        </CartSection>
      </Container>
    );
  }
}

const mapStateProps = state => ({
  cart: state.cart,
});

const mapDispatch = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateProps,
  mapDispatch,
)(Cart);
