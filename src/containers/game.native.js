import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import Canvas from './canvas.native';
import {ADD_BLOCK, CLEAR_ACTION, JUMP, CHECK_COLLISIONS} from './../actions';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            action: null
        }
    }

    componentDidMount() {
        this.addBlock();
        setInterval(() => this.props.checkCollisions(), 20);
    }

    /**
     * Randomly adding block to the game
     * */
    addBlock = () => {
        setTimeout(() => {
            this.props.addBlock();
            setTimeout(this.addBlock, (new Date()).getTime() % 1000);
        }, 700);
    };

    onClick = () => {
        this.props.jump();
        setTimeout(() => this.props.clearAction(), 100);
    };

    canPlay = () => {
        console.log('lives', this.props.ambient.lives);
        return this.props.ambient.lives > 0;
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.onClick}>
                    <View>
                        <Canvas
                            canPlay={this.props.game.lives > 0}
                            action={this.props.hero.action}
                            blocks={this.props.ambient.blocks}
                            score={this.props.game.score}
                        />
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
    ambient: state.ambient,
    game: state.game
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
    },
    checkCollisions: () => {
        dispatch({type: CHECK_COLLISIONS})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);


