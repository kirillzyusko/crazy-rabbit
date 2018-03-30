import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Application from './src/App';
import reducer from './src/reducers';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      //loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
};

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

AppRegistry.registerComponent('mobile', () => App);
