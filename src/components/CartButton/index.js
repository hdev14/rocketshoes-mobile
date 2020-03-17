import React, {Component} from 'react';
import {NavigationContext, StackActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {TouchCart, ProductQuantity} from './styles';

export default class CartButton extends Component {
  static contextType = NavigationContext;

  handleOnClick = () => {
    const navigation = this.context;
    const pushAction = StackActions.push('Cart');

    navigation.dispatch(pushAction);
  };

  render() {
    return (
      <TouchCart onPress={this.handleOnClick}>
        <ProductQuantity>2</ProductQuantity>
        <Icon name="shopping-bag" color="#fff" size={25} />
      </TouchCart>
    );
  }
}
