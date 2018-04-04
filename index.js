import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Application from './src/App';
import { configureStore } from './src/redux/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

AppRegistry.registerComponent('mobile', () => App);
