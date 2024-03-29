import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from './screens/Home';
import Cart from './screens/Cart';

import Logo from './assets/images/logo.svg';
import CartButton from './components/CartButton';

const Stack = createStackNavigator();

export default function Routes(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#333',
          },
          headerTitle: props => <Logo height={200} width={200} />,
          headerRight: () => <CartButton />,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={Home.defaultOptions}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={Cart.defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
