import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';
import Canvas from './canvas.native';
import { Swipeable } from '../../core/annotations';

@Swipeable
class GameCanvas extends PureComponent {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onTouch}>
        <View>
          <Canvas
            canPlay={this.props.lives > 0}
            blocks={this.props.blocks}
            score={this.props.score}
            lives={this.props.lives}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

GameCanvas.propTypes = {
  onTouch: PropTypes.func.isRequired,
  onSwipeUp: PropTypes.func.isRequired, // need for @Swipeable
  blocks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    appearance: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired
  })).isRequired,
  lives: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};

export default GameCanvas;
