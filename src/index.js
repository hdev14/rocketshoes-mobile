import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import './configs/ReactotronConfig';
import store from './store';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
