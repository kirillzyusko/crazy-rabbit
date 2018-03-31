import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { config, screens } from './router/router.native';

const RootStack = StackNavigator(
  {
    ...screens
  },
  {
    ...config
  }
);

type Props = {};
class App extends Component<Props> {
  render() {
    console.log('AppRerender');
    return <RootStack />;
  }
}

export default App;

