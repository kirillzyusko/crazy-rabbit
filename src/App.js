import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {config, screens} from './router/router.native';

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
        return <RootStack/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default App;



