import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import GestureRecognizer from 'react-native-swipe-gestures';
import { connect } from 'react-redux';
import Canvas from './canvas.native';
import {
  CLEAR_ACTION,
  ACTION,
  CHECK_COLLISIONS,
  START_GAME
} from './../actions';
import {
  COLLISION,
  LONG_JUMP,
  SHORT_JUMP
} from '../engine/constants/hero';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      action: null
    };
    this.emitCollision = null;
  }

  componentDidMount() {
    this.props.startGame();
    this.props.checkCollisions();
    console.log('timeout through: ', this.props.game.nextCollisionThrough);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.game.nextCollisionThrough !== this.props.game.nextCollisionThrough) {
      console.log('componentDidUpdate timeout through: ', this.props.game.nextCollisionThrough, Date.now());
      this.delayCollisionEmit();
    }
  }

  onShortJump = () => {
    this.collisionEmitClear();
    this.props.actionEmit(SHORT_JUMP);
    this.props.checkCollisions();
    setTimeout(() => this.props.clearAction(), 100);
  };

  onLongJump = () => {
    this.collisionEmitClear();
    this.props.actionEmit(LONG_JUMP);
    this.props.checkCollisions();
    setTimeout(() => this.props.clearAction(), 100);
  };

  collisionEmitClear = () => clearInterval(this.emitCollision);

  delayCollisionEmit = () => {
    this.emitCollision = setTimeout(() => {
      console.log(COLLISION, Date.now());
      this.props.actionEmit(COLLISION);
    }, this.props.game.nextCollisionThrough);
  };

  render() {
    console.log('rerender game container', this.props.game.nextCollisionThrough, Date.now());
    return (
      <View style={styles.container}>
        <GestureRecognizer onSwipeUp={this.onLongJump}>
          <TouchableWithoutFeedback onPress={this.onShortJump}>
            <View>
              <Canvas
                canPlay={this.props.game.lives > 0}
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

Game.propTypes = {
  ambient: PropTypes.shape({
    blocks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      appearance: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired
    }))
  }).isRequired,
  game: PropTypes.shape({
    lives: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    nextCollisionThrough: PropTypes.number.isRequired
  }).isRequired,
  clearAction: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  checkCollisions: PropTypes.func.isRequired,
  actionEmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ambient: state.ambient,
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  startGame: () => {
    dispatch({ type: START_GAME });
  },
  actionEmit: (type) => {
    dispatch({ type: ACTION, payload: type });
  },
  clearAction: () => {
    dispatch({ type: CLEAR_ACTION });
  },
  checkCollisions: () => {
    dispatch({ type: CHECK_COLLISIONS });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

