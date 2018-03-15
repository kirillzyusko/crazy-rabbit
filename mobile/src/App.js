import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import Canvas from './containers/canvas.native';
import {ADD_BLOCK, CLEAR_ACTION, JUMP} from './actions';

type Props = {};
class App extends Component<Props> {
    constructor() {
        super();
        this.state = {
            action: null
        }
    }

    componentDidMount() {
        this.addBlock();
    }

    /**
     * Randomly adding block to the game
     * */
    addBlock = () => {
        setTimeout(() => {
            this.props.addBlock();
            setTimeout(this.addBlock, 700);
        }, 700);
    };

    onClick = () => {
        this.props.jump();
        setTimeout(() => this.props.clearAction(), 100);
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.onClick}>
                    <View>
                        <Canvas action={this.props.hero.action} blocks={this.props.ambient.blocks} />
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

const mapStateToProps = state => ({
    hero: state.hero,
    ambient: state.ambient
});

const mapDispatchToProps = dispatch => ({
    jump: () => {
        dispatch({type: JUMP})
    },
    clearAction: () => {
        dispatch({type: CLEAR_ACTION})
    },
    addBlock: () => {
        dispatch({type: ADD_BLOCK})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



