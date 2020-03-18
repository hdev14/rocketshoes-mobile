import styled from 'styled-components';

export const TouchCart = styled.TouchableOpacity`
  margin-right: 20px;
  position: relative;
`;

export const ProductQuantity = styled.Text`
  position: absolute;
  top: -10px;
  right: -10px;
  color: #333;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding: 3px 8px;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  z-index: 1;
  font-weight: bold;
`;
