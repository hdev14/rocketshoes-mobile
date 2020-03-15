import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Screens
import Home from './screens/Home';
import Cart from './screens/Cart';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'left',
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
