import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';
import {
  Animated,
  Easing
} from 'react-native';
import Block from './block.native';
import {
  height,
  width,
  distanceWithRespectToGround,
  heightOfOneBlock,
  timeOfBlockMovement
} from '../../../../../engine/constants/engine';

class BlockFacility extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  shouldComponentUpdate() {
    return false;
  }

  animate() {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: timeOfBlockMovement / this.props.speed, // speed
        easing: Easing.linear,
        useNativeDriver: true,
        delay: this.props.appearanceAt
      }
    ).start();
  }

  render() {
    console.log('block: ', this.props.appearanceAt, this.props.height);

    const style = {
      position: 'absolute',
      top: (height - distanceWithRespectToGround) - heightOfOneBlock * (this.props.height - 1),
      right: -heightOfOneBlock
    };
    const right = {
      transform: [
        {
          translateX: this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -(width + heightOfOneBlock)]
          })
        }
      ]
    };

    return (
      <Animated.View style={[style, right]}>
        {times(this.props.height, i => <Block key={i} />)}
      </Animated.View>
    );
  }
}

BlockFacility.propTypes = {
  appearanceAt: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
};

export default BlockFacility;
