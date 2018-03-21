import React, { Component } from 'react';
import {
  Animated,
  Easing
} from 'react-native';
import Svg from 'react-native-svg';
import PropTypes from 'prop-types';
import {isEqual} from 'lodash';
import {
  distanceWithRespectToGround,
  height,
  heightOfHero,
  heightOfJump,
  timeOfJump,
  upperJump,
  widthOfHero
} from '../../../engine/constants/engine';
import { JUMP } from '../../../actions';
import { getHeroByType } from '../../../utils/hero.native';

// todo: currentHeight && futureHeight и логику с их автозамещением ставить в state компонента hero
class Hero extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.action === JUMP) {
      this.animate();
    }
  }

	shouldComponentUpdate(nextProps, nextState) {
		if (this.wasActionCleared(nextProps)) return false;
		return !this.isTheSameProps(nextProps);
	}

	isTheSameProps = (nextProps) => isEqual(nextProps, this.props);

	wasActionCleared = (nextProps) => this.props.action !== null && nextProps.action === null;

  animate() {
    if (this.animatedValue._value === 0) {
      this.animatedValue.setValue(0);
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: timeOfJump,
          easing: Easing.linear
        }
      ).start(() => this.animatedValue.setValue(0));
    }
  }

  render() {
    console.log('rerender hero');
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, upperJump, 1],
      outputRange: [0, -heightOfJump, 0]
    });

    return (
      <Animated.View style={{ ...style, marginTop: movingMargin }}>
        <Svg width={widthOfHero} height={heightOfHero}>
          {getHeroByType(this.props.type)}
        </Svg>
      </Animated.View>
    );
  }
}

const style = {
  position: 'absolute',
  top: height - distanceWithRespectToGround - heightOfJump
};

Hero.propTypes = {
  action: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Hero;
