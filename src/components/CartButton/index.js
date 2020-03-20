import React from 'react';
import {useSelector} from 'react-redux';
import {StackActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {TouchCart, ProductQuantity} from './styles';

export default function CartButton() {
  const amount = useSelector(state => state.cart.length);
  const navigation = useNavigation();

  function handleOnClick() {
    const pushAction = StackActions.push('Cart');
    navigation.dispatch(pushAction);
  }

  return (
    <TouchCart onPress={handleOnClick}>
      {amount !== 0 && <ProductQuantity>{amount}</ProductQuantity>}
      <Icon name="shopping-bag" color="#fff" size={25} />
    </TouchCart>
  );
}
