import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from './screens/Home';
import Cart from './screens/Cart';

import Logo from './assets/images/logo.svg';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#333',
          },
          headerTitle: props => <Logo height={200} width={200} />,
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
