import React, {useState, useEffect} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

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

export default function Home() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const amounts = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, []),
  );

  function renderItem({item}) {
    return (
      <Product>
        <ProductImg source={{uri: item.image}} />
        <ProductName>{item.title}</ProductName>
        <ProductValue>R$ {item.price.toLocaleString('pt-BR')}</ProductValue>

        <ProductButton
          title="button"
          onPress={() => dispatch(addToCartRequest(item.id))}>
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
  }

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
          renderItem={renderItem}
        />
      )}
    </Container>
  );
}
