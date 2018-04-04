import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameCanvas from '../components/game/game-canvas.native';
import {
  ACTION,
  CHECK_COLLISIONS,
  START_GAME
} from './../actions';
import {
  COLLISION,
  LONG_JUMP,
  SHORT_JUMP
} from '../engine/constants/hero';
import { LEVEL_SCREEN } from '../router/navigation';

class Game extends Component {
  constructor() {
    super();

    this.emitCollision = null;
  }

  componentDidMount() {
    this.props.startGame();
    this.props.checkCollisions();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.game.level !== prevProps.game.level) { // isNextLevel/isLevelComplete
      // this.props.navigation.navigate(LEVEL_SCREEN);
    }
    if (prevProps.game.nextCollisionThrough !== this.props.game.nextCollisionThrough) {
      this.delayCollisionEmit();
    }
  }

  onShortJump = () => {
    this.collisionEmitClear();
    this.props.actionEmit(SHORT_JUMP);
    this.props.checkCollisions();
  };

  onLongJump = () => {
    this.collisionEmitClear();
    this.props.actionEmit(LONG_JUMP);
    this.props.checkCollisions();
  };

  collisionEmitClear = () => clearInterval(this.emitCollision);

  delayCollisionEmit = () => {
    this.emitCollision = setTimeout(() => {
      this.props.actionEmit(COLLISION);
      this.props.checkCollisions();
    }, this.props.game.nextCollisionThrough);
  };

  render() {
    return (
      <GameCanvas
        onTouch={this.onShortJump}
        onSwipeUp={this.onLongJump}
        score={this.props.game.score}
        blocks={this.props.ambient.blocks}
        lives={this.props.game.lives}
      />
    );
  }
}

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
    level: PropTypes.number.isrequired,
    nextCollisionThrough: PropTypes.number.isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
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
  checkCollisions: () => {
    dispatch({ type: CHECK_COLLISIONS });
  },
  onSwipeUp: () => {
    dispatch({ type: ACTION, payload: LONG_JUMP });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

