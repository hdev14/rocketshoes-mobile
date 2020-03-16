import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

export const CartSection = styled.View`
  margin-top: 30px;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
`;

export const ProductList = styled.FlatList`
  margin-top: 30px;
  height: 250px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
`;

export const ProductImg = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  padding: 5px 10px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const ProductValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const TrashButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const ProductAmount = styled.View`
  margin: 10px 0;
  background-color: #ddd;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 6px 30px;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const AmountInput = styled.TextInput`
  height: 30px;
  width: 50px;
  padding: 0 5px;
  background-color: white;
`;

export const AmountIcon = styled(Icon)`
  margin-left: 5px;
`;

export const Subtotal = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const CartFooter = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 150px;
`;

export const Total = styled.View`
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
`;

export const TotalValue = styled.Text`
  font-size: 34px;
  font-weight: bold;
`;

export const CartFooterButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #333;
  padding: 10px 12px;
`;

export const CartFooterButtonText = styled.Text`
  font-size: 24px;
  text-transform: uppercase;
  color: #eee;
`;
