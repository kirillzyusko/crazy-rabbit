/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import Canvas from './containers/canvas.native';
import { JUMP } from './actions';

type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super();
        this.state = {
            action: null
        }
    }

    onClick = () => {
        this.setState({ action: JUMP });
        setTimeout(() => this.setState({ action: null }), 100);
    };

    render () {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.onClick}>
                    <View>
                        <Canvas action={this.state.action}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
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
