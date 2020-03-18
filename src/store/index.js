import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const enhancer = __DEV__
  ? compose(
      console.tron.createEnhancer(),
      applyMiddleware(sagaMiddleware),
    )
  : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
