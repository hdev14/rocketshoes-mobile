import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';
import {darken} from 'polished';

export const ProductList = styled.FlatList`
  margin-top: 30px;
`;

export const Product = styled.View`
  height: 350px;
  width: 250px;
  padding: 15px;
  margin: 0 10px;
  background-color: white;
  border-radius: 4px;
  justify-content: center;
`;

export const ProductImg = styled.Image`
  align-self: center;
  height: 150px;
  width: 150px;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  color: #666;
`;

export const ProductValue = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin: 5px 0 10px;
`;

export const ProductButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #333;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  overflow: hidden;
`;

export const CartIcon = styled(Icon)`
  background-color: ${darken(0.05, '#333')};
  padding: 10px 15px;
`;

export const ProductButtonText = styled.Text`
  flex: 1;
  color: #ddd;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
`;
