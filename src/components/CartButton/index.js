import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationContext, StackActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {TouchCart, ProductQuantity} from './styles';

class CartButton extends Component {
  static contextType = NavigationContext;

  handleOnClick = () => {
    const navigation = this.context;
    const pushAction = StackActions.push('Cart');

    navigation.dispatch(pushAction);
  };

  render() {
    const {amount} = this.props;

    return (
      <TouchCart onPress={this.handleOnClick}>
        {amount !== 0 && <ProductQuantity>{amount}</ProductQuantity>}
        <Icon name="shopping-bag" color="#fff" size={25} />
      </TouchCart>
    );
  }
}

const mapStatePros = state => ({
  amount: state.cart.length,
});

export default connect(mapStatePros)(CartButton);
