import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import { debounce } from 'lodash';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { connect } from 'react-redux';
import Canvas from './canvas.native';
import { ADD_BLOCK, CLEAR_ACTION, JUMP, CHECK_COLLISIONS, START_GAME } from './../actions';
import { LONG_JUMP, SHORT_JUMP } from '../engine/constants/hero';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      action: null
    };
  }

  componentDidMount() {
    this.props.startGame();
    this.props.checkCollisions();
    /* this.addBlock();*/
    setInterval(() => {
      //const start = Date.now();
      this.props.checkCollisions();
      //const end = Date.now();
      //console.log('collisions check about: %s ms', end - start);
    }, 100);
  }

  onShortJump = () => {
    this.props.jump(SHORT_JUMP);
    setTimeout(() => this.props.clearAction(), 100);
  };

  onLongJump = () => {
    this.props.jump(LONG_JUMP);
    setTimeout(() => this.props.clearAction(), 100);
  };

  /**
	* Randomly adding block to the game
   * */
  addBlock = () => {
    setTimeout(() => {
      this.props.addBlock();
      setTimeout(this.addBlock, (new Date()).getTime() % 1000);
    }, 700);
  };

  canPlay = () => {
    console.log('lives', this.props.ambient.lives);
    return this.props.ambient.lives > 0;
  };

  render() {
    console.log('rerender game container');
    return (
      <View style={styles.container}>
        <GestureRecognizer onSwipeUp={this.onLongJump}>
          <TouchableWithoutFeedback onPress={this.onShortJump}>
            <View>
              <Canvas
                nextPositionHero={this.props.hero.nextPosition}
                heroType={this.props.hero.type}
                canPlay={this.props.game.lives > 0}
                action={this.props.hero.action}
                blocks={this.props.ambient.blocks}
                score={this.props.game.score}
                lives={this.props.game.lives}
              />
            </View>
          </TouchableWithoutFeedback>
        </GestureRecognizer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

const mapStateToProps = state => ({
  hero: state.hero,
  ambient: state.ambient,
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  startGame: () => {
    dispatch({ type: START_GAME });
  },
  jump: (type) => {
    dispatch({ type: JUMP, payload: type });
  },
  clearAction: () => {
    dispatch({ type: CLEAR_ACTION });
  },
  addBlock: () => {
    dispatch({ type: ADD_BLOCK });
  },
  checkCollisions: () => {
    dispatch({ type: CHECK_COLLISIONS });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

