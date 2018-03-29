import React, { Component } from 'react';
import {
  Animated,
  Easing
} from 'react-native';
import Svg, { G } from 'react-native-svg';
import PropTypes from 'prop-types';
import {
  distanceWithRespectToGround,
  height,
  heightOfHero,
  heightOfJump,
  heightOfOneBlock,
  heroScalability,
  timeOfJump,
  upperJump,
  widthOfHero
} from '../../../engine/constants/engine';
import { JUMP } from '../../../actions';
import { getHeroByType } from '../../../utils/hero.native';

/**
 * @param isJump - boolean
 * @param blockCountRelativeCurrentPosition - number
 * @return Object (contains information about path of movement)
 * */
const getMatrixForJump = (blockCountRelativeCurrentPosition, isJump) => (
  isJump ?
    {
      inputRange: [0, upperJump, 1],
      outputRange: [0, blockCountRelativeCurrentPosition === 0 ? -heightOfJump : -heightOfJump * blockCountRelativeCurrentPosition, blockCountRelativeCurrentPosition * (-heightOfOneBlock)]
    }
    :
    {
      inputRange: [0, 1],
      outputRange: [0, blockCountRelativeCurrentPosition * (-heightOfOneBlock)]
    }
);

class Hero extends Component {
  constructor() {
    super();

    this.state = {
      currentPosition: 0
    };
    this.animatedValue = new Animated.Value(0);
    this.opacity = new Animated.Value(1);
  }

  componentDidMount() {
    this.animateBump();
  }

  // todo: replace it to getDerivedStateFromProps
  componentWillReceiveProps(nextProps) {
    if (nextProps.action === JUMP) {
      this.animateJump(this.state.currentPosition + 1);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentPosition !== this.state.currentPosition;
  }

  animateBump() {
    Animated.sequence([
      Animated.timing(this.opacity, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      })
    ]).start(() => {
      this.animateBump();
    });
  }

  animateJump(nextPosition) {
    if (this.animatedValue._value === 0) {
      this.animatedValue.setValue(0);
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: timeOfJump,
          easing: Easing.linear,
          useNativeDriver: true
        }
      ).start(() => {
        this.animatedValue.setValue(0);
        this.setState({ currentPosition: nextPosition });
      });
    }
  }

  render() {
    console.log('rerender hero');

    const { currentPosition } = this.state;
    const style = {
      position: 'absolute',
      top: height - 1.5 * distanceWithRespectToGround - currentPosition * heightOfOneBlock
    };
    const top = {
      transform: [
        {
          translateY: this.animatedValue.interpolate(getMatrixForJump(2, true))
        }
      ]
    };
    const opacity = {
      opacity: this.opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      })
    };

    return (
      <Animated.View style={[style, top, opacity]}>
        <Svg width={widthOfHero * heroScalability} height={heightOfHero * heroScalability}>
          <G transform={{ scale: heroScalability }}>
            {getHeroByType(this.props.type)}
          </G>
        </Svg>
      </Animated.View>
    );
  }
}

Hero.propTypes = {
  action: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Hero;
