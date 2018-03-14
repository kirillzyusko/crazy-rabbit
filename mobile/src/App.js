/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Svg, {G} from 'react-native-svg';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing,
    TouchableWithoutFeedback,
    Button
} from 'react-native';
import Block from "./components/models/environment/blocks/block.native";
import Canvas from "./containers/canvas.native";
import {JUMP} from "./actions";

const AnimatedG = Animated.createAnimatedComponent(G);

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor () {
        super();
        this.state = {
            action: null
        }
    }

    onClick = () => {
        console.log('click');
        this.setState({action: JUMP});
        setTimeout(() => this.setState({action: null}), 100);
    };

    render () {
        return (
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={this.onClick}>
                        <Canvas action={this.state.action}/>
                        {/*<View>
                            <Svg height={200} width={300}>
                                <Animated.View style={{marginBottom: movingMargin}}>

                                        <SvgObject />

                                </Animated.View>
                            </Svg>
                            <Block/>
                        </View>*/}
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
    },
    hero: {
        position: 'absolute'
    },
    buttonContainer: {
        margin: 20
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
